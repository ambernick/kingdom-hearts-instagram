const User = require("../models/user");
const Post = require("../models/post")

module.exports = {
  index,
  showProfile,
  update,
  show,
  follow,
  unFollow
};

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "User Index", user: req.user, users });
  });
}

function showProfile(req, res) {
  User.findById(req.user._id)
  .populate("friends")
  .then((user) => {
    res.render("users/profile", {title: "Profile Page", user})
  })
}