const router = require('express').Router()
const postsCtrl = require('../controllers/posts')

router.get('/gen', isLoggedIn, postsCtrl.newPost)
router.get('/', isLoggedIn, postsCtrl.index)
router.put('/:id', isLoggedIn, postsCtrl.update)
router.get('/', isLoggedIn, postsCtrl.showLikes)
router.post('/', isLoggedIn, postsCtrl.create)
router.get('/:id', isLoggedIn, postsCtrl.show)
router.delete('/:id', isLoggedIn, postsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;