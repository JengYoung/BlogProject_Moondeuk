import express from 'express';
import checkController from './checkController.js';
import loginController from './loginController.js';
import registerController, { validationCheck } from './registerController.js';

const auth = express.Router();

auth.post('/register', validationCheck, registerController);
auth.post('/login', loginController);
auth.get('/check', checkController);
export default auth;