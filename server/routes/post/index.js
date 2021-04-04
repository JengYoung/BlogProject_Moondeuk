import express from 'express';
import listController from './listController.js';
import writeController, { postValidationCheck } from './writeController.js';

const post = express.Router();

/* create - write */ 
post.post('/write', postValidationCheck, writeController);

/* read (all) - list */ 
post.get('/list', listController);

export default post;