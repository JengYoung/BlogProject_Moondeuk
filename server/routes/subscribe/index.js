import express from 'express';
import subscribeController from './subscribeController.js';
import subscribedInfoController from './subscribedInfoController.js';
import subscribeInfoController from './subscribeInfoController.js';
import unSubscribeController from './unSubscribeController.js';

const subscribe = express.Router();

subscribe.post('/subscribeInfo', subscribeInfoController);
subscribe.post('/subscribe', subscribeController);
subscribe.post('/subscribedInfo', subscribedInfoController);
subscribe.post('/unsubscribe', unSubscribeController);

export default subscribe;