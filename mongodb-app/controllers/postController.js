"use strict";
let Models = require("../models");

const getPosts = (res) => {
  Models.Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// const createPost = (data, res) => {
//   console.log(data);
//   new Models.Post(data)
//     .save()
//     .then((data) => res.send({ result: 200, data: data }))
//     .catch((err) => {
//       console.log(err);
//       res.send({ result: 500, error: err.message });
//     });
// };

const createPost = (data, res) => {
  new Models.Post(data).save((err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const updatePost = (req, res) => {
  console.log(req.body);
  Models.Post.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost
};
