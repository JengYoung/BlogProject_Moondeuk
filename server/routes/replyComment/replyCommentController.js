import Comment from '../../models/comment.js';
import User from '../../models/user.js';

/* write a reply to user's comment */
const replyCommentController = async (req, res) => {
    const { user_id, comment_id } = req.params;
    const { replyTo_id, content } = req.body;
    console.log("input: ", user_id, comment_id, replyTo_id, content)
    try {
        const { userId, nickname } = await User.findById(user_id).exec();
        const replyComment = {
            replier_id: user_id,
            replierInfo: {
                userId,
                nickname,
            },
            replyTo_id,
            content,
        };
        // console.log("replyComment", replyComment)
        const comment = await Comment.findById(comment_id).exec();
        console.log("comment: ", comment);
        let { replyComments } = await Comment.findById(comment_id).exec();
        replyComments = replyComments.concat(replyComment);
        const result = await Comment.findByIdAndUpdate(comment_id, { "replyComments": replyComments }, { new: true }, (err, result) => {
            if (err) res.status(404).send(err);
            return result
        });
        const comments = await Comment.find({}).exec();
        console.log("result: ", result);
        res.send(comments);
    } catch(e) {
        return res.status(500).send(e);
    };
}
export default replyCommentController;