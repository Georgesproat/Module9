const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");


router.get("/", (req, res) => {
  commentController.getComments(req, res); 
});

router.post("/", commentController.createComment);

module.exports = router;
