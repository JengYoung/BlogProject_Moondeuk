import express from 'express';
const search = express.Router();

search.get('/search/:keywordType/:keyword', SearchController);
export default search;