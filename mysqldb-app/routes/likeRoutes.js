const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

// Route for liking a post
router.post("/like", likeController.likePost);

// Route for unliking a post
router.delete("/unlike", likeController.unlikePost);

module.exports = router;
