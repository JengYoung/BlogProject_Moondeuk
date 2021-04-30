import express from 'express';
import checkReplyCommentController from './checkReplyCommentController.js';
import replyCommentController from './replyCommentController.js';

const replyComment = express.Router();

replyComment.get('/:comment_id', checkReplyCommentController);
replyComment.post('/:user_id/:comment_id', replyCommentController);
// replyComment.patch('/:replyComment_id', updateReplyCommentController);
// replyComment.delete('/:replyComment_id', deleteReplyCommentController);

export default replyComment;