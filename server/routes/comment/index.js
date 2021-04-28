import express from 'express';

const comment = express.Router();

/* [ CREATE ] User's comment */ 
comment.post('/comment/:userId/:diaryId', commentController);
/* [ READ ] Diary's comment */ 
comment.get('/comment/:diaryId', checkCommentController);
/* [ UPDATE ] User's comment */
comment.patch('/comment/:commentId/:diaryId', updateCommentController); 
/* [ DELETE ] User's comment */ 
comment.delete('/comment/:commentId/:diaryId', deleteCommentController);

export default comment;