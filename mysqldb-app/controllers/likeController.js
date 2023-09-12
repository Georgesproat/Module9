const Models = require("../models");

const likePost = (req, res) => {
  const { userId, postId } = req.body;

  Models.Like.create({ userId, postId })
    .then((like) => {
      res.json({ result: 200, data: like });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const unlikePost = (req, res) => {
  const { userId, postId } = req.body;

  Models.Like.destroy({
    where: { userId, postId }
  })
    .then(() => {
      res.json({ result: 200, message: "Post unliked successfully." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

module.exports = {
  likePost,
  unlikePost
};
