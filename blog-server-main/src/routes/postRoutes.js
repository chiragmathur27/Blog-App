const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const auth = require("../middleware/auth")

router.post('/', auth, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/author', postController.getPostsByAuthor);

module.exports = router;