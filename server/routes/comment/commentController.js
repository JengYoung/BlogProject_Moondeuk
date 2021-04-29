import Comment from '../../models/comment.js';
import User from '../../models/user.js';

const commentController = async (req, res) => {
    const { user_id, diary_id } = req.params;
    const { content } = req.body;
    try {
        const { userId, nickname } = await User.findById(user_id).exec();
        const comment = new Comment({
            user_id,
            userInfo: {
                userId,
                nickname
            },
            diary_id,
            content,
        });
        await comment.save();
        return res.send(comment);
    } catch(e) {
        return res.status(400).send(e)
    };
};

export default commentController;