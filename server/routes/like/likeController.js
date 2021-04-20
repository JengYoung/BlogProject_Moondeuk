import Like from '../../models/like.js';

const likeController = async (req, res) => {
    const { userId, diaryId } = req.params;
    const like = new Like({
        userId,
        diaryId,
    });
    try {
        await like.save();
        return res.send(like)
    } catch(e) {
        return res.status(400).send(e);
    };
};

export default likeController;