const Post = require("../models/post");


module.exports = {
    index,
    create,
    show: showFeed,
    update,
    newPost,
    showLikes,
    delete : deletePost
  }

  //keeps an index of the posts and shows the most recent post first
  function index(req, res) {
    Post.find({})
    .then((Posts) => {
      res.render("posts/index", {
        user: req.user,
        title: "Message Board",
        posts: Posts.reverse(),
       
    
    })
    })
  }
  
  //create posts and direct to the home feed page
  function create(req, res) {
    req.body.name = req.user.name
    req.body.avatar = req.user.avatar
    req.body.Likes = 0
    console.log(req.body.Posts)
    console.log(req.user._id)
    
    // console.log(post._id)
    console.log(req.body.id)
    Post.create(req.body)
    .then(() => {
      console.log(req.params.id)
    console.log(req.body._id)
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
    const postID = req.params.id.toString().trim()
    Post.findByIdAndUpdate({'_id':postID}, {$inc:{Likes: 1}})
    
  
    .then(() => {
      res.redirect("/posts")
    })
  }

  function showLikes(req, res) {
    Post.findById(req.body._id)
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

  function deletePost(req,res) {
    console.log(req.params.id)
    const postID = req.params.id.toString().trim()
    Post.findByIdAndDelete(postID, (err, Post) => {
      res.redirect("/posts");
  })
  
  }