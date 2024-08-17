const Comment = require('./commentsModel');
const Post = require('../posts/postsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.toggleLikeComment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const comment = await Comment.findById(id);
  if (!comment) {
    return next(new AppError(`Comment not found with id: ${id}`, 404));
  }

  if (comment.likes.includes(req.user._id)) {
    const index = comment.likes.indexOf(req.user._id);
    comment.likes.splice(index, 1);
  } else {
    comment.likes.push(req.user._id);
  }
  await comment.save();
  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new AppError(`Post not found with id: ${req.params.id}`, 404));
  }
  const commentDto = {
    content: req.body.content,
    postId: req.params.id,
    userId: req.user._id,
  };
  const comment = await Comment.create(commentDto);
  post.comments.push(comment._id);
  await post.save();
  res.status(201).json({
    status: 'success',
    data: {
      comment,
    },
  });
});
exports.createReplies = catchAsync(async (req, res, next) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    return next(new AppError(`Comment not found with id: ${req.params.id}`, 404));
  }
  const post = await Post.findById(req.params.postId);
  if (!post) {
    return next(new AppError(`Post not found with id: ${req.params.id}`, 404));
  }
  const replyDto = {
    content: req.body.content,
    userId: req.user._id,
  };
  const reply = await Comment.create(replyDto);
  comment.replies.push(reply._id);

  await comment.save();

  res.status(201).json({
    status: 'success',
    data: {
      reply,
    },
  });
});

const populateReplies = async (comment) => {
  // Populate the replies for the current comment
  const populatedComment = await Comment.populate(comment, {
    path: 'replies',
    populate: { path: 'replies', model: 'Comment' },
  });

  // Recursively populate replies for each reply
  if (populatedComment.replies && populatedComment.replies.length > 0) {
    populatedComment.replies = await Promise.all(populatedComment.replies.map(populateReplies));
  }

  return populatedComment;
};

exports.getCommentWithReplies = catchAsync(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id).lean();
  if (!comment) {
    return next(new AppError(`Comment not found with id: ${req.params.id}`, 404));
  }

  const commentWithReplies = await populateReplies(comment);

  res.status(200).json({
    status: 'success',
    data: {
      comment: commentWithReplies,
    },
  });
});
