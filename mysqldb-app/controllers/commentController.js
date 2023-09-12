const Models = require("../models");

const getComments = (req, res) => {
  Models.Comment.findAll()
    .then((comments) => {
      res.json({ result: 200, data: comments });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const createComment = (req, res) => {
  const { text, userId, postId } = req.body;
  Models.Comment.create({ text, userId, postId })
    .then((comment) => {
      res.json({ result: 200, data: comment });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  createComment
};
