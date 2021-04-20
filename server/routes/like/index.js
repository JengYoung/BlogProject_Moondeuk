import express from 'express';

const like = express.Router();

like.post('/like/:userId/:diaryId', likeController);
like.delete('/like/:userId/:diaryId', dislikeController);

export default like;