import express from 'express';
import alertController from './alertController.js';

const alert = express.Router();

alert.post('/alert', alertController);
alert.post('/checkAlert/:user_id', checkAlertController);
export default alert;