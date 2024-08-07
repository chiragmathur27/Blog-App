const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({
      title,
      content,
      authorId: req.user.id,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPostsByAuthor = async (req, res) => {
  try {
    const authorId = req.query.author;
    console.log(authorId)
    const posts = await Post.find({ authorId }).sort({ createdAt: -1 });
    console.log(posts)
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};