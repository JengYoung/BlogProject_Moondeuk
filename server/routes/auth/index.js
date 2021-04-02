import express from 'express';
import loginController from './loginController.js';
import registerController, { validationCheck } from './registerController.js';

const auth = express.Router();

auth.post('/register', validationCheck, registerController);
auth.post('/login', loginController);
export default auth;