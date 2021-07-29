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
        const result = await Promise.all(commentList.map( async comment => {
            const { user_id } = comment
            const { userImage } = await User.findById(user_id);
            let { replyComments } = comment;
            replyComments = await ReplyComment.find({ comment_id: comment._id }).lean();
            return {
                ...comment,
                userInfo: {
                    ...comment.userInfo,
                    userImage,
                },
                replyComments,
            }
        }));
        res.send(result)
    } catch(e) {
        res.status(400).send(e);
    };
};

export default checkCommentController