import express from 'express';
import subscribeController from './subscribeController.js';
import subscribeNumController from './subscribeNumController.js';

const subscribe = express.Router();

subscribe.post('/subscribeNum', subscribeNumController);
subscribe.post('/subscribe', subscribeController);
// subscribe.post('/subscribingList', subscribingListController);
// subscribe.post('/subscribedList', subscribedListController);
// subscribe.post('/unsubscribe', unsubscribeController);

export default subscribe;