import Like from '../../models/like.js';

const likeListController = async (req, res) => {
    const { diaryId } = req.params;
    try {
        const likeList = await Like.find({ diaryId });
        return res.send(likeList);
    } catch(e) {
        res.status(400).send(e);
    }
};

export default likeListController;