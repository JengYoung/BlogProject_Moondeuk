import express from 'express';
import auth from './auth/index.js';
import neighbor from './neighbor/index.js';
import post from './post/index.js';
const routes = express.Router();
routes.use('/auth', auth);
routes.use('/post', post);
routes.use('/neighbor', neighbor);
export default routes;