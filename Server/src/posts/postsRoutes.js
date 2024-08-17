const express = require('express');
const router = express.Router();
const postController = require('./postsController');
const commentController = require('../comments/commentsController');
const authController = require('../../middleware/authController');

router.use(authController.protect);

router.route('/').get(postController.getAllPosts).post(postController.createPost);
router.route('/:id').get(postController.getPost).patch(postController.updatePost).delete(postController.deletePost);
router.get('/getAllUserPosts', postController.getAllUserPosts);

router.get('/openPostComments', postController.openPostComments);
router.get('/togglePostLikes/:id', postController.toggleLikePost);

// Comment section
router.post('/createComment/:id', commentController.createComment);
router.get('/toggleCommentLikes/:id', commentController.toggleLikeComment);
router.post('/createReplies/:postId/:commentId', commentController.createReplies);
router.get('/getCommentReplies/:id', commentController.getCommentWithReplies);

module.exports = router;
