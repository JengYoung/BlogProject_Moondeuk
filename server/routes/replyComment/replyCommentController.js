import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';
import User from '../../models/user.js';

/* write a reply to user's comment */
const replyCommentController = async (req, res) => {
    const { replyTo, content, nickname, comment_id, user_id } = req.body;
    console.log(replyTo, content, user_id, comment_id, nickname)
    try {
        const replyComment = new ReplyComment({
            comment_id,
            replier: {
                _id: user_id,
                nickname
            },
            replyTo,
            content,
        });
        await replyComment.save();
        res.send(replyComment)
    } catch(e) {
        return res.status(500).send(e);
    };
}
export default replyCommentController;