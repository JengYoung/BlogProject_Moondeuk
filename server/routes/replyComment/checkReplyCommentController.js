import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';

const checkReplyCommentController = async (req, res) => {
    console.log("여기 comment", req.params);
    const { comment_id } = req.params;
    console.log("")
    try {
        const replyCommentList = await ReplyComment.find({ comment_id }).exec();
        return res.send(replyCommentList);
    } catch(e) {
        return res.status(400).send(e);
    }    
}

export default checkReplyCommentController;