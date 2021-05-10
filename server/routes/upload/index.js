import express from 'express';
import uploadImgFile from '../../lib/upload.js';
import userImgUploadController from './userImgUploadController.js';

const upload = express.Router();

upload.post("/:user_id", uploadImgFile.single('file'), userImgUploadController);

export default upload;