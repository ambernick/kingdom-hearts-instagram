const router = require('express').Router()
const feedsCtrl = require('../controllers/feeds')

router.get('/', isLoggedIn, feedsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;