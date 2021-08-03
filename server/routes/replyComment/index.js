import express from 'express';
import replyCommentController from './replyCommentController.js';
import updateReplyCommentController from './updateReplyCommentController.js';
import deleteReplyCommentController from './deleteReplyCommentController.js';
import checkAuthUser from '../../middleware/checkAuthUser.js';

const replyComment = express.Router();

/* 
    checkReplyComment의 경우, 댓글마다 api를 부르는 것은 과하므로 
    checkCommentController을 호출할 때 같이 보내준다.
*/
replyComment.post('/', checkAuthUser, replyCommentController); 
replyComment.patch('/', checkAuthUser, updateReplyCommentController);
replyComment.delete('/', checkAuthUser, deleteReplyCommentController);

export default replyComment;