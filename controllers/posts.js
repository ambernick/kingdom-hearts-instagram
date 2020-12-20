const Post = require("../models/post");

module.exports = {
    index,
    create,
    showFeed
  }
  
  function index(req, res) {
    Post.find({})
    .then((Posts) => {
      res.render("posts/index", {
        user: req.user,
        title: "Message Board",
        posts: Posts.reverse()
      })
    })
  }
  
  function create(req, res) {
    req.body.postedBy = req.user.name
    req.body.avatar = req.user.avatar
    Post.create(req.body)
    .then(() => {
      res.redirect('/posts')
    })
  }
  
  function showFeed(req, res) {
    Post.findById(req.params.id)
    .then((Post) => {
      res.render('posts/show', {
        title: "Message Details",
        user: req.user,
        post
      })
    })
  }
  
