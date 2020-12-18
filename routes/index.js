var express = require('express');
var router = express.Router();
const usersCtrl = require("../controllers/users");

/* GET home page. */
router.get("/", isLoggedIn, usersCtrl.index);

//  {
//   res.render('index', { title: 'Kingdom Hearts', user: req.user ? req.user : null });
//   isLoggedIn()
// });

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.render('index', { title: 'Kingdom Hearts', user: req.user ? req.user : null });
  res.redirect("/auth/google");
}
module.exports = router;
