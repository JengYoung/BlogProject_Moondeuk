import express from 'express';
import checkReplyCommentController from './checkReplyCommentController.js';
import replyCommentController from './replyCommentController.js';
import updateReplyCommentController from './updateReplyCommentController.js';
import deleteReplyCommentController from './deleteReplyCommentController.js';
import checkAuthUser from '../../middleware/checkAuthUser.js';

const replyComment = express.Router();

replyComment.get('/:comment_id', checkReplyCommentController);
replyComment.post('/:nickname', checkAuthUser, replyCommentController);
replyComment.patch('/', checkAuthUser, updateReplyCommentController);
replyComment.delete('/', checkAuthUser, deleteReplyCommentController);

export default replyComment;