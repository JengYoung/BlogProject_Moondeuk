import express from 'express';
import listController from './listController.js';
import readController from './readController.js';
import writeController, { postValidationCheck } from './writeController.js';

const post = express.Router();

/* create - write */ 
post.post('/write', postValidationCheck, writeController);

/* read (all) - list */ 
post.get('/list', listController);

/* read (id) - read */
post.get('/read/:id', readController);


export default post;