import Comment from '../../models/comment.js';

const checkCommentController = async (req, res) => {
    const { diary_id } = req.params;
    console.log(diary_id)
    try {
        const commentList = await Comment.find({ diary_id });
        console.log("commentList: ",commentList)
        res.send(commentList)
    } catch(e) {
        res.status(400).send(e);
    };
};

export default checkCommentController