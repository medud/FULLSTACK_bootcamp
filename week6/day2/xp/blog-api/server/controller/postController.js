const postModel = require('../models/postModel');

exports.getAll = async (req, res) => {
  const posts = await postModel.getAllPosts();
  res.json(posts);
};

exports.getOne = async (req, res) => {
  const post = await postModel.getPostById(req.params.id);
  post ? res.json(post) : res.status(404).json({ message: 'Post not found' });
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const newPost = await postModel.createPost(title, content);
  res.status(201).json(newPost);
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  const updatedPost = await postModel.updatePost(req.params.id, title, content);
  updatedPost ? res.json(updatedPost) : res.status(404).json({ message: 'Post not found' });
};

exports.delete = async (req, res) => {
  const deletedPost = await postModel.deletePost(req.params.id);
  deletedPost ? res.json(deletedPost) : res.status(404).json({ message: 'Post not found' });
};
