const router = require('express').Router()
const commentsCtrl = require('../controllers/comments')

router.get('/', isLoggedIn, commentsCtrl.index)
router.post('/', isLoggedIn, commentsCtrl.create)
router.get('/:id', isLoggedIn, commentsCtrl.show)
router.post('/:id', isLoggedIn, commentsCtrl.reply)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;