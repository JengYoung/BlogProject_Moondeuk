import Like from '../../models/like.js';

const likeController = async (req, res) => {
    const { userId, diaryId } = req.params;
    /* typeName: Diary, Comment, ReplyComment */
    const { typeId, typeName } = req.body;
    console.log(typeId, typeName)
    const like = new Like({
        typeName,
        typeId,
        userId,
        diaryId,
    });
    try {
        /* 현재 이미 해당 타입에 대해 좋아요를 눌렀는 지 확인 */ 
        const checkExist = await Like.find({ typeName, typeId, userId, diaryId }).exec();
        console.log("checkExist: ", checkExist)
        if (checkExist.length > 0) return res.status(409).send();
        await like.save();
        return res.send(like)
    } catch(e) {
        return res.status(400).send(e);
    };
};

export default likeController;