import ReplyComment from '../../models/replyComment.js';
import User from '../../models/user.js';

/* write a reply to user's comment */
const replyCommentController = async (req, res) => {
    const { user_id, comment_id } = req.params;
    const { content } = req.body;
    try {
        const { userId, nickname } = await User.findById(user_id).exec();
        const replyComment = new ReplyComment({
            comment_id,
            replier_id: user_id,
            replierInfo: {
                userId,
                nickname,
            },
            content,
        });

        await replyComment.save();
        return res.send(replyComment);
    } catch(e) {
        return res.status(400).send(e);
    }
}

export default replyCommentController;