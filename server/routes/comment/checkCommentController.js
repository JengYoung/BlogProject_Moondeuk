import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';
import User from '../../models/user.js';

const checkCommentController = async (req, res) => {
    const { diary_id } = req.params;
    console.log("checkCommentController: ", diary_id)
    try {
        let commentList = await Comment.find({ diary_id })
                                        .lean()
                                        .sort({commentAt: -1});
        console.log(commentList)
        const result = await Promise.all(commentList.map( async comment => {
            const { user_id } = comment
            const { userImage } = await User.findById(user_id);
            let { replyComments } = comment;
            replyComments = await Promise.all(replyComments.map(async replyComment => {
                const { replyTo_id } = replyComment;
                let replyTo_userId = null;
                if (replyTo_id.toString() !== comment._id.toString()) {
                    console.log(replyTo_id.toString(), comment._id.toString())
                    console.log("난 이상한 게 아냐!")
                    console.log(replyTo_id)
                    const res = await ReplyComment.find({ _id: replyTo_id }).exec()
                    console.log("화난다", res)
                }
                console.log("대답: ", replyTo_userId)
                const result = {
                    ...replyComment,
                    replyTo_userId
                }
                return result
            }))
            const data = {
                ...comment,
                userImage,
                replyComments,
            }
            return data
        }));
        res.send(result)
    } catch(e) {
        res.status(400).send(e);
    };
};

export default checkCommentController