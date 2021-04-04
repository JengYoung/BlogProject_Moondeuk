import express from 'express';
import writeController, { postValidationCheck } from './writeController.js';

const post = express.Router();

post.post('/write', postValidationCheck, writeController);

export default post;