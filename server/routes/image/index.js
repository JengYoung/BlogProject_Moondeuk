import express from 'express';
import getUserImageController from './getUserImageController.js';

const image = express.Router();

image.get(`/`, getUserImageController);

export default image;