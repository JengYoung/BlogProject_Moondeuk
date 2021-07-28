import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';
import User from '../../models/user.js';

/* write a reply to user's comment */
const replyCommentController = async (req, res) => {
    const { nickname } = req.params;
    const { repliedCommentId, content, user_id, comment_id } = req.body;
    try {
        const replyComment = new ReplyComment({
            comment_id,
            replier: {
                user_id,
                nickname
            },
            repliedCommentId,
            content,
        });
        await replyComment.save();
    } catch(e) {
        return res.status(500).send(e);
    };
}
export default replyCommentController;