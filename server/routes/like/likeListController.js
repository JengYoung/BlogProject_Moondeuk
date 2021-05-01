import mongoose from 'mongoose';
import Like from '../../models/like.js';
import User from '../../models/user.js';

const likeListController = async (req, res) => {
    const { diaryId } = req.params;
    console.log("likeListController - diaryId: ", diaryId);
    const likeList = await Like.find({ diaryId }).exec();
    try {
        const result = await User.getUserIdAndNickname(likeList, 'userId');
        return res.send(result);
    } catch(e) {
        res.status(400).send(e);
    }
};

export default likeListController;