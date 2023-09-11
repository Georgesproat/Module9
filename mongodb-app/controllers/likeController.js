const Models = require("../models");

const likePost = (req, res) => {
  Models.Post.findById(req.params.id)
    .then((post) => {
      if (!post.likes.includes(req.body.userId)) {
        post.likes.push(req.body.userId);
        return post.save();
      }
      return post;
    })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  likePost
};
