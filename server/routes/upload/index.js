import express from 'express';
import checkAuthUser from '../../middleware/checkAuthUser.js';
import userImgUploadController from './userImgUploadController.js';

const upload = express.Router();

upload.post("/:user_id", checkAuthUser, userImgUploadController);

export default upload;