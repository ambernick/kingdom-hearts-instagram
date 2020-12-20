const router = require('express').Router()
const feedsCtrl = require('../controllers/posts')

router.get('/', isLoggedIn, feedsCtrl.index)

function showFeed (req, res) {
  User.findById(req.user._id)
    .then((user) => {
      res.render("users/profile", { title: "Profile Page", user });
    });
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;