import User from '../../models/user.js';
import mongoose from 'mongoose';

const registerController = async (req, res) => {
    const { userId, password, nickname, birthday } = req.body;
    const data = new User(req.body);
    try {
        const IdExists = await User.checkUserId(userId)
        if (IdExists) {
            res.status(409).send('Conflict');
            return;
        }
        await data.convertHashPassword(data, password);
        await data.save();
        res.send(data);
    } catch(e) {
        res.status(400).send(e);
    }
}
export default registerController;
