const router = require('express').Router()
const commentsCtrl = require('../controllers/comments')

router.get('/posts/', isLoggedIn, commentsCtrl.index)
router.put('/posts/:id', isLoggedIn, commentsCtrl.update)
router.get('/posts/', isLoggedIn, commentsCtrl.show)
router.post('/posts/', isLoggedIn, commentsCtrl.create)
router.delete('/posts/:id', isLoggedIn, commentsCtrl.delete)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;