import express from 'express';
import checkAuthUser from '../../middleware/checkAuthUser.js';
import checkLikeController from './checkLikeController.js';
import dislikeController from './dislikeController.js';
import likeController from './likeController.js';
// import likeListController from './likeListController.js';

const like = express.Router();

like.post('/:userId/:diaryId' ,likeController);
like.delete('/:userId/:diaryId/:typeName/:typeId', dislikeController);
// like.get('/:diaryId', likeListController);
like.get('/:diaryId', checkLikeController);

export default like;