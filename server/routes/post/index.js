import express from 'express';
import checkAuthUser from '../../middleware/checkAuthUser.js';
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
post.post('/write', checkAuthUser, postValidationCheck, writeController);

/* read (all) - list */ 
post.get('/', listController);

/* read (id) - read */
post.get('/:id', readController);

/* update (PATCH /:id) - update */ 
post.patch('/update/:id', checkAuthUser, updateController);

/* delete (DELETE /:id) - delete */
post.delete('/delete/:id', checkAuthUser, deleteController);
export default post;