const router = require('express').Router()
const postsCtrl = require('../controllers/posts')

router.get('/', isLoggedIn, postsCtrl.index)
router.post('/', isLoggedIn, postsCtrl.create)
router.get('/:id', isLoggedIn, postsCtrl.showFeed)
// router.post('/:id', isLoggedIn, postsCtrl.reply)

// router.get("/new", isLoggedIn, postsCtrl.new);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;