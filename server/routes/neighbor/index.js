import express from 'express';

const neighbor = express.router();

neighbor.post('/followNum', neighborNumController);
neighbor.post('/following', followingController);
neighbor.post('/followed', followedController);
neighbor.post('/unfollow', unfollowController)