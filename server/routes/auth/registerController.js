import User from '../../models/user.js';
import mongoose from 'mongoose';

const registerController = async (req, res, next) => {
    const { userId, password, nickname, birthday } = req.body;
    const data = new User(req.body);
    await data.save();
    res.send(data);
    next();
}
export default registerController;
