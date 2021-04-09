import express from 'express';
import checkValidId from '../../middleware/routesMiddleware/checkValidId.js';
import deleteController from './deleteController.js';
import listController from './listController.js';
import readController from './readController.js';
import updateController from './updateController.js';
import writeController, { postValidationCheck } from './writeController.js';

const post = express.Router();

/*
    CRUD API
*/ 

/* create - write */ 
post.post('/write', postValidationCheck, writeController);

/* read (all) - list */ 
post.get('/list', listController);

/* read (id) - read */
post.get('/:id',checkValidId, readController);

/* update (PATCH /:id) - update */ 
post.patch('/update/:id', checkValidId, updateController);

/* delete (DELETE /:id) - delete */
post.delete('/delete/:id', checkValidId, deleteController);
export default post;