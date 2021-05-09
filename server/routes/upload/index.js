import express from 'express';
import imgUploadController from './imgUploadController.js';

const upload = express.Router();

upload.post("/:userId", imgUploadController);

export default upload;