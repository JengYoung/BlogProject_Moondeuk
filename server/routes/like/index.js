import express from 'express';
import dislikeController from './dislikeController.js';
import likeController from './likeController.js';

const like = express.Router();

like.post('/:userId/:diaryId', likeController);
like.delete('/:userId/:diaryId', dislikeController);

export default like;