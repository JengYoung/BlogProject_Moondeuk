import express from 'express';
import neighborNumController from './neighborNumController';

const neighbor = express.router();

neighbor.post('/followNum', neighborNumController);
neighbor.post('/following', followingController);
neighbor.post('/followed', followedController);
neighbor.post('/unfollow', unfollowController)