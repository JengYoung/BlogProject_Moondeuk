import Like from '../../models/like.js';

const dislikeController = async (req, res) => {
    const { userId, diaryId } = req.params;
    try{
        if (!userId || !diaryId) return;
        const data = await Like.findOne({ userId, diaryId });
        await Like.findByIdAndDelete(data._id)
        return res.status(204).send();
    } catch(e) {
        return res.status(400).send(e);
    }
}
export default dislikeController;