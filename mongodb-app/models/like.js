const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: true
  }
});

module.exports = mongoose.model("like", likeSchema);
