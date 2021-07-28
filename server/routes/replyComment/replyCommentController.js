import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';
import User from '../../models/user.js';

/* write a reply to user's comment */
const replyCommentController = async (req, res) => {
    const { user_id, comment_id } = req.params;
    const { replyTo_id, content } = req.body;
    try {
        const { userId, nickname, userImage } = await User.findById(user_id).exec();
        const data = {
            replier_id: user_id,
            replierInfo: {
                userId,
                nickname,
                userImage
            },
            replyTo_id,
            content,
        };
        const replyComment = new ReplyComment(data);
        await replyComment.save();
        // let { replyComments } = await Comment.findById(comment_id).exec();
        // replyComments = replyComments.concat();
        // await Comment.findByIdAndUpdate(comment_id, { "replyComments": replyComments }, { new: true }, (err, result) => {
        //     if (err) res.status(404).send(err);
        //     return res.send(result)
        // });
    } catch(e) {
        return res.status(500).send(e);
    };
}
export default replyCommentController;