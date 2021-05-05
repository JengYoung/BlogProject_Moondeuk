import express from 'express';
import alertController from './sendAlertController.js';

const alert = express.Router();

alarm.post('/alert', alertController);
alarm.post('/checkAlert/:user_id', checkAlertController);
export default alarm;