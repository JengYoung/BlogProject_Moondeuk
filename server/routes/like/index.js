import express from 'express';
import dislikeController from './dislikeController.js';
import likeController from './likeController.js';
import likeListController from './likeListController.js';

const like = express.Router();

like.post('/:userId/:diaryId', likeController);
like.delete('/:userId/:diaryId', dislikeController);
like.get('/:diaryId', likeListController);

export default like;