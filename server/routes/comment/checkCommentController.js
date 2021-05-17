import Comment from '../../models/comment.js';
import User from '../../models/user.js';

const checkCommentController = async (req, res) => {
    const { diary_id } = req.params;
    try {
        let commentList = await Comment.find({ diary_id }).lean();
        const result = await Promise.all(commentList.map( async comment => {
            const { user_id } = comment
            const { userImage } = await User.findById(user_id);
            const data = {
                ...comment,
                userImage,
            }
            return data
        }));
        res.send(result)
    } catch(e) {
        res.status(400).send(e);
    };
};

export default checkCommentController