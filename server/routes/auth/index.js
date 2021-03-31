import express from 'express';
import registerController from './registerController.js';

const auth = express.Router();

auth.post('/register', registerController);


export default auth;