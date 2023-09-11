const Models = require("../models");

const commentOnPost = (req, res) => {
  const { text, userId } = req.body;

  Models.Post.findById(req.params.id)
    .then((post) => {
      const comment = {
        text: text,
        user: userId
      };
      post.comments.push(comment);
      return post.save();
    })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  commentOnPost
};
