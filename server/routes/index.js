import express from 'express';
import auth from './auth/index.js';

const routes = express.Router();
routes.use('/auth', auth);

export default routes;