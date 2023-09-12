const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, trim: true }, 
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
   likes: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    }
  ],
  comments: [
    {
      text: { type: String, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
      createdAt: { type: Date, default: Date.now },
    }
  ],
});

module.exports = mongoose.model("Post", postSchema);
