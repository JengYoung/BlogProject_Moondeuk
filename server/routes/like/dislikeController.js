import Like from '../../models/like.js';

const dislikeController = async (req, res) => {
    const { userId, diaryId, typeName, typeId } = req.params;
    // console.log(userId, diaryId, typeName, typeId)
    try{
        if (!userId || !diaryId) return;
        const data = await Like.findOne({ typeName, typeId, userId, diaryId }).exec();
        console.log(data);
        await Like.findByIdAndDelete(data._id)
        return res.status(204).send();
    } catch(e) {
        return res.status(400).send(e);
    }
}
export default dislikeController;