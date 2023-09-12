"use strict";
const Models = require("../models");
const getPosts = (req, res) => {
  Models.Post.findAll()
    .then((posts) => {
      res.json({ result: 200, data: posts });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};

const createPost = (req, res) => {
  const { title, description, image } = req.body;
  Models.Post.create({ title, description, image })
    .then((post) => {
      res.json({ result: 200, data: post });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ result: 500, error: err.message });
    });
};



module.exports = {
  getPosts,
  createPost
  
};
