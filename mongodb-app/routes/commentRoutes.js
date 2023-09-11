const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/:id/comment", (req, res) => {
  commentController.commentOnPost(req, res);
});

module.exports = router;
