import express from 'express';
import subscribeController from './subscribeController.js';
import subscribeNumController from './subscribeNumController.js';

const neighbor = express.Router();

neighbor.post('/subscribeNum', subscribeNumController);
neighbor.post('/subscribe', subscribeController);
// neighbor.post('/subscribingList', subscribingListController);
// neighbor.post('/subscribedList', subscribedListController);
// neighbor.post('/unsubscribe', unsubscribeController);

export default neighbor;