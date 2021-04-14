import express from 'express';
import subscribeController from './subscribeController.js';
import subscribedInfoController from './subscribedInfoController.js';
import subscribeInfoController from './subscribeInfoController.js';

const subscribe = express.Router();

subscribe.post('/subscribeInfo', subscribeInfoController);
subscribe.post('/subscribe', subscribeController);
subscribe.post('/subscribedInfo', subscribedInfoController);
// subscribe.post('/subscribedList', subscribedListController);
// subscribe.post('/unsubscribe', unsubscribeController);

export default subscribe;