import express from 'express';
import checkValidId from '../../middleware/routesMiddleware/checkValidId.js';
import listController from './listController.js';
import readController from './readController.js';
import updateController from './updateController.js';
import writeController, { postValidationCheck } from './writeController.js';

const post = express.Router();

/* create - write */ 
post.post('/write', postValidationCheck, writeController);

/* read (all) - list */ 
post.get('/list', listController);

/* read (id) - read */
post.get('/read/:id',checkValidId, readController);

/* update (PATCH /:id) - update */ 
post.patch('/update/:id', checkValidId, updateController);

export default post;