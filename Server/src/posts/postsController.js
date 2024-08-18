const Posts = require('./postsModel');
const Comment = require('../comments/commentsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');

exports.getAllPosts = catchAsync(async (req, res) => {
  const posts = await Posts.find().populate('originalPostId');
  if (!posts || posts.length === 0) {
    return next(new AppError('No posts found', 404));
  }
  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts,
    },
  });
});
exports.getAllUserPosts = catchAsync(async (req, res) => {
  const post = await Posts.find({ userId: req.params.userId }).populate('originalPostId').lean();
  if (!post || post.length === 0) {
    return next(new AppError('No posts found', 404));
  }
  const posts = Array.from(post).map((item) => {
    item.likes = item.likedBy.length;
    item.comments = item.comments.length;
    item.shares = item.sharedBy.length;
    return item;
  });
  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: {
      posts,
    },
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const post = await Posts.findById(id).populate('originalPostId');

  if (!post) {
    return next(new AppError(`Post not found with id: ${id}`, 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

exports.openPostComments = catchAsync(async (req, res, next) => {
  const post = await Posts.findById(req.params.id).populate('originalPostId');
  if (!post) {
    return next(new AppError(`Post not found with id: ${req.params.id}`, 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  req.body.userId = req.user._id;
  const post = await Posts.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      post,
    },
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const post = await Posts.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) {
    return next(new AppError(`Post not found with id: ${id}`, 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const post = await Posts.findByIdAndDelete(id);
  const comments = await Comment.deleteMany({ postId: id });
  if (!post) {
    return next(new AppError(`Post not found with id: ${id}`, 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.toggleLikePost = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const post = await Posts.findById(id);
  if (!post) {
    return next(new AppError(`Post not found with id: ${id}`, 404));
  }

  if (post.likedBy.includes(req.user._id)) {
    const index = post.likedBy.indexOf(req.user._id);
    post.likedBy.splice(index, 1);
  } else {
    post.likedBy.push(req.user._id);
  }
  await post.save();
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});
