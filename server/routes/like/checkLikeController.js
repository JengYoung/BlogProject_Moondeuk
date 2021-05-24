import Like from '../../models/like.js';

const checkLikeController = async (req, res) => {
    const { userId, diaryId } = req.params;
    if (!userId || !diaryId) return res.status(400).send(); 
    try {
        const diaryList = await Like.find({ typeName: 'Diary', userId, diaryId }).exec();
        const commentList = await Like.find({ typeName:"Comment", userId, diaryId }).exec();
        const replyCommentList = await Like.find({ typeName: "ReplyComment", userId, diaryId}).exec()
        return res.send({diaryList, commentList, replyCommentList});
    } catch(e) {
        return res.status(400).send()
    }
}

export default checkLikeController;