const Post = require("../models/post");


module.exports = {
    index,
    create,
    showFeed,
    update,
    newPost,
    showLikes
  }

  //keeps an index of the posts and shows the most recent post first
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
  
  //create posts and direct to the home feed page
  function create(req, res) {
    req.body.name = req.user.name
    req.body.avatar = req.user.avatar
    req.body.Likes = 0
    console.log(req.body.Posts)
    Post.create(req.body)
    .then(() => {
      res.redirect('/posts')
    })
  }
  
  function showFeed(req, res) {
    Post.findById(req.params.id)
    .then((Post) => {
      res.render('posts/show', {
        name: "Message Details",
        
      })
    })
  }
  
  // update and display likes on a post
  function update(req, res) {
    console.log(req.body.Likes)
    var amount = req.body.Likes + 1
    // req.body.likedBy = req.body.likedBy  + " , " + req.user.name 
console.log(req.body.Likes)
    Post.findByIdAndUpdate(req.params.id, {$inc:{Likes: 1}})
    
    // Post.update({ _id: req.params.id }, 
    //   { $set: req.body, $inc: { Likes: 1 } }, 
    //   { multi: false })
    .then(() => {
      res.redirect("/posts")
    })
  }

  function showLikes(req, res) {
    Post.findById(req.params.id)
    // .populate("friends")
    .then((likedBy) => {
      res.render("/posts", {Likes: 1, likedBy})
    })
  }
  
  function newPost(req, res) {
    res.render("posts/gen", {
      name: "Create Post",
      // results: null
    })
  }