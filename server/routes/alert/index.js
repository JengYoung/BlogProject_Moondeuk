import express from 'express';
import alertController from './alertController.js';
import checkAlertController from './checkAlertController.js';
import conformAlertController from './conformAlertController.js';

const alert = express.Router();

alert.post('/', alertController);
alert.get('/checkAlert/:user_id', checkAlertController);
alert.patch('/conformAlert/:user_id', conformAlertController);
export default alert;