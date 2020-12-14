const User = require("../models/user");
const Game = require("../models/game")

module.exports = {
  index,
  showProfile,
  update,
  show,
  addFriend,
  removeFriend
};

function index(req, res) {
  User.find({}).then((users) => {
    res.render("users/index", { title: "User Index", user: req.user, users });
  });
}

function showProfile(req, res) {
  User.findById(req.user._id)
  .populate("friends")
  .then((user) => {
    res.render("users/profile", {title: "Profile Page", user})
  })
}