import express from 'express';
import checkController from './checkController.js';
import getUserInfoController from './getUserInfoController.js';
import loginController from './loginController.js';
import logoutController from './logoutController.js';
import registerController, { validationCheck } from './registerController.js';

const auth = express.Router();

auth.post('/register', validationCheck, registerController);
auth.post('/login', loginController);
auth.get('/check', checkController);
auth.post('/logout', logoutController);
auth.post('/getUserInfo', getUserInfoController);
export default auth;