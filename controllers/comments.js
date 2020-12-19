const User = require("../models/user");
const Comment = require("../models/comment");

module.exports = {
    index,
    showComment,
    update,
    create

};

function index(req, res) {
    Comment.find({}).then((comments) => {
      res.render("comments/index", { title: "Comment Index", comment: req.Comment, comments });
    });
  }
  
  function showComment(req, res) {
    Comment.findById(req.Comment._id)
    .populate("friends")
    .then((Comment) => {
      res.render("comments/profile", {title: "Profile Page", comment})
    })
  }

  function create(req, res) {
    req.body.postedBy = req.user.name
    req.body.avatar = req.user.avatar
    Comment.create(req.body)
    .then(() => {
      res.redirect('/comments')
    })
  }
  
  function update(req, res) {
    Comment.findByIdAndUpdate(req.comment._id, req.body, {new: true})
    .then(() => {
      res.redirect("/comments/profile")
    })
  }