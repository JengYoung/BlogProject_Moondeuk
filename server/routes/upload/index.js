import express from 'express';
import uploadImgFile from '../../lib/upload.js';
import checkAuthUser from '../../middleware/checkAuthUser.js';
import userImgUploadController from './userImgUploadController.js';

const upload = express.Router();

upload.post("/:user_id", checkAuthUser, uploadImgFile.single('file'), userImgUploadController);

export default upload;