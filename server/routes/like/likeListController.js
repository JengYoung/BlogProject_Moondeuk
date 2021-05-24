import mongoose from 'mongoose';
import Like from '../../models/like.js';
import User from '../../models/user.js';

const likeListController = async (req, res) => {
    const { diaryId } = req.params;
    console.log(diaryId)
    try {
        /* 각 타입에 맞는 diary 좋아요 결과 가져 오기*/
        const diaryTypeResult = await Like.find({ typeName: 'Diary', diaryId }).exec();
        const commentTypeResult = await Like.find({ typeName:"Comment", diaryId }).exec();
        const replyCommentTypeResult = await Like.find({ typeName: "ReplyComment", diaryId}).exec()
        /* 각 좋아요 데이터에 대한 username 가져오기 */ 
        const diaryList = await User.getUserIdAndNickname(diaryTypeResult, 'userId');
        const commentList = await User.getUserIdAndNickname(commentTypeResult, 'userId');
        const replyCommentList = await User.getUserIdAndNickname(replyCommentTypeResult, 'userId');
        return res.send({diaryList, commentList, replyCommentList});
    } catch(e) {
        res.status(400).send(e);
    }
};

export default likeListController;