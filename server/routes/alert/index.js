import express from 'express';
import checkAuthUser from '../../middleware/checkAuthUser.js';
import alertController from './alertController.js';
import checkAlertController from './checkAlertController.js';
import conformAlertController from './conformAlertController.js';

const alert = express.Router();

alert.post('/', checkAuthUser, alertController);
alert.get('/checkAlert/:user_id', checkAuthUser, checkAlertController);
alert.patch('/conformAlert/:user_id', checkAuthUser, conformAlertController, checkAlertController);
export default alert;