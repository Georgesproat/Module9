const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

router.post("/api/posts/:id/like", (req, res) => {
  likeController.likePost(req, res);
});

module.exports = router;
