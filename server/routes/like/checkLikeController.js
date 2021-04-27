import Like from '../../models/like.js';

const checkLikeController = async (req, res) => {
    const { userId, diaryId } = req.params;
    if (!userId || !diaryId) return res.status(400).send(); 
    try {
        const result = await Like.findOne({ userId, diaryId });
        if (result) return res.send(result);
    } catch(e) {
        return res.send(400).send()
    }
}

export default checkLikeController;