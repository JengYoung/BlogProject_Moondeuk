import Like from '../../models/like.js';

const likeController = async (req, res) => {
    const { userId, diaryId } = req.params;
    /* typeName: Diary, Comment, ReplyComment */
    const { typeId, typeName } = req.body;
    const like = new Like({
        typeName,
        typeId,
        userId,
        diaryId,
    });
    try {
        /* 현재 이미 좋아요를 눌렀는 지 확인 */ 
        const checkExist = await Like.findData({ userId, diaryId });
        if (checkExist) return res.status(409).send();
        await like.save();
        return res.send(like)
    } catch(e) {
        return res.status(400).send(e);
    };
};

export default likeController;