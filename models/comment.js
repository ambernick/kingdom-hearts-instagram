const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
  postedBy: String,
  avatar: String,
  comment: String
}, {
  timestamps: true
})

const commentSchema = new Schema({
  postedBy: String,
  avatar: String,
  title: String,
  replies: [replySchema]
}, {
  timestamps: true
})

module.exports = mongoose.model("Comment", commentSchema)