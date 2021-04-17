import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

/* 해당 유저가 추가한 이웃 리스트 및 수를 전달. */
const subscribeInfoController = async (req, res) => {
    const { authorId } = req.params;
    try {
        const subscribeList = await Subscribe.find({subscribeTo: authorId}).exec();
        return res.send({subscribeToList: subscribeList, count: subscribeList.length});
    } catch(e) {
        return res.status(400).send(e);
    }
}

export default subscribeInfoController;