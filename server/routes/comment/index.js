import express from 'express';
import checkCommentController from './checkCommentController.js';
import commentController from './commentController.js';
import deleteCommentController from './deleteCommentController.js';
import updateCommentController from './updateCommentController.js';

const comment = express.Router();

/* [ CREATE ] User's comment */ 
comment.post('/:userId/:diaryId', commentController);
/* [ READ ] Diary's comment */ 
comment.get('/:diaryId', checkCommentController);
/* [ UPDATE ] User's comment */
comment.patch('/:commentId', updateCommentController); 
/* [ DELETE ] User's comment */ 
comment.delete('/:commentId', deleteCommentController);

export default comment;