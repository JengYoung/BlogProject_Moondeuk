import Comment from '../../models/comment.js';

const checkCommentController = async (req, res) => {
    const { diaryId } = req.params;
    try {
        const commentList = await Comment.find({ diaryId });
        res.send(commentList)
    } catch(e) {
        res.status(400).send(e);
    };
};

export default checkCommentController