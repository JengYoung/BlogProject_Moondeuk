import Comment from '../../models/comment.js';

const commentController = async (req, res) => {
    const { userId, diaryId } = req.params;
    const { content } = req.body;
    try {
        const comment = new Comment({
            userId,
            diaryId,
            content,
        });
        await comment.save();
        return res.send(comment);
    } catch(e) {
        return res.status(400).send(e)
    };
};

export default commentController;