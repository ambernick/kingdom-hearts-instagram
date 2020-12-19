const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        name: String,
        email: String,
        avatar: String,
        googleId: String,
        Likes: Number,
        Caption: String,
        Comments: String,
        
      },
      {
        timestamps: true,
      }
    );
    
    module.exports = mongoose.model("Post", postSchema);
