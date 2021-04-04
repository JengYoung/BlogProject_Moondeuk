import express from 'express';
import writeController from './writeController.js';

const post = express.Router();

post.post('/write', writeController);

export default post;