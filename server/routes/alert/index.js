import express from 'express';
import alertController from './alertController.js';
import checkAlertController from './checkAlertController.js';

const alert = express.Router();

alert.post('/', alertController);
alert.get('/checkAlert/:user_id', checkAlertController);
export default alert;