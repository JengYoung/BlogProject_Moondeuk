import express from 'express';
import SearchController from './SearchController.js';

const search = express.Router();

search.get('/:keywordType/:keyword', SearchController);
export default search;