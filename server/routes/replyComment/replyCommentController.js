import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';
import User from '../../models/user.js';

/* write a reply to user's comment */
const replyCommentController = async (req, res) => {
    const { user_id, comment_id } = req.params;
    const { replyTo_id, content } = req.body;
    console.log( req.params);
    console.log( replyTo_id, content);
    try {
        const { userId, nickname } = await User.findById(user_id).exec();
        console.log("여기1")
        const replyComment = {
            replier_id: user_id,
            replierInfo: {
                userId,
                nickname,
            },
            replyTo_id,
            content,
        };
        let { replyComments } = await Comment.findById(comment_id).exec();
        replyComments = replyComments.concat(replyComment)
        console.log(replyComments);
        await Comment.findByIdAndUpdate(comment_id, { replyComments }, { new: true }, (err, result) => {
            if (err) res.status(404).send('NOT FOUND');
            return res.send(result);
        });
    } catch(e) {
        return res.status(500).send(e);
    };
}
// const replyCommentController = async (req, res) => {
//     const { user_id, comment_id } = req.params;
//     const { content } = req.body;
//     try {
//         const { userId, nickname } = await User.findById(user_id).exec();
        // const replyComment = new ReplyComment({
        //     comment_id,
        //     replier_id: user_id,
        //     replierInfo: {
        //         userId,
        //         nickname,
        //     },
        //     content,
        // });

//         await replyComment.save();
//         return res.send(replyComment);
//     } catch(e) {
//         return res.status(400).send(e);
//     }
// }

export default replyCommentController;