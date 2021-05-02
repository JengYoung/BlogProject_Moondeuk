import express from 'express';
import checkReplyCommentController from './checkReplyCommentController.js';
import replyCommentController from './replyCommentController.js';
import updateReplyCommentController from './updateReplyCommentController.js';
import deleteReplyCommentController from './deleteReplyCommentController.js';

const replyComment = express.Router();

replyComment.get('/:comment_id', checkReplyCommentController);
replyComment.post('/:user_id/:comment_id', replyCommentController);
replyComment.patch('/:comment_id/:replyComment_id', updateReplyCommentController);
replyComment.delete('/:comment_id/:replyComment_id', deleteReplyCommentController);

export default replyComment;