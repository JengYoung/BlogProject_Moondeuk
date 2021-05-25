import Like from '../../models/like.js';
import User from '../../models/user.js';

const checkLikeController = async (req, res) => {
    const { diaryId } = req.params;
    if (!diaryId) return res.status(400).send(); 
    try {
        const diaryData = await Like.find({ typeName: 'Diary', diaryId }).lean();
        const commentData = await Like.find({ typeName:"Comment", diaryId }).lean();
        const replyCommentData = await Like.find({ typeName: "ReplyComment", diaryId}).lean()
        const diaryList = await User.getUserIdAndNickname(diaryData, 'userId');
        const commentList = await User.getUserIdAndNickname(commentData, 'userId');
        const replyCommentList = await User.getUserIdAndNickname(replyCommentData, 'userId');
        
        return res.send({ diaryList, commentList, replyCommentList });
    } catch(e) {
        return res.status(400).send()
    }
}

export default checkLikeController;