import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';

const updateReplyCommentController = async(req, res) => {
    const { comment_id, replyComment_id } = req.params;
    console.log(comment_id, replyComment_id)
    try {
        const comment = await Comment.findReplyComment(comment_id, replyComment_id);
        res.send(comment);
    } catch(e) {
        res.status(500).send(e);
    }

};

export default updateReplyCommentController;