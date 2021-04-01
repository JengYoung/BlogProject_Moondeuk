import express from 'express';
import registerController, { validationCheck } from './registerController.js';

const auth = express.Router();

auth.post('/register', validationCheck, registerController);

export default auth;