const Post = require("../models/post");
const Comment = require("../models/comment")

module.exports = {
  index,
  create,
  show: showComment,
  update,
  delete : deleteComment

};

function index(req, res) {
  Comment.find({})
  .then((comment) => {
    res.render("posts/index", {
      user: req.user,
      title: "Message Board",
      comments: comment.reverse(),

     
  
  })
  })
}


function create(req, res) {
  req.body.name = req.user.name
  req.body.avatar = req.user.avatar

  Comment.create(req.body)
  .then(() => {
    res.redirect('/posts')
  })
}

function showComment(req, res) {
  Comment.findById(req.params.id)
  .then((Comment) => {
    res.render('posts/show', {
      name: "Message Details",
      
    })
  })
}

// update and display likes on a post
function update(req, res) {
  const postID = req.params.id.toString().trim()
  Comment.findByIdAndUpdate({'_id':postID}, {$inc:{Likes: 1}})
  

  .then(() => {
    res.redirect("/posts")
  })
}

function deleteComment(req,res) {
  console.log(req.params.id)
  const postID = req.params.id.toString().trim()
  Comment.findByIdAndDelete(postID, (err, Post) => {
    res.redirect("/posts");
})

}
