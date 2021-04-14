import Subscribe from '../../models/subscribe.js';

/* 해당 유저를 친구로 추가한 이웃 리스트 및 수를 전달. */
const subscribedInfoController = async (req, res) => {
    const { subscribedFrom } = req.body;
    try {
        const result = await Subscribe.find({subscribedFrom}).exec();
        return res.send({subscribedFrom: result, count: result.length});
    } catch(e) {
        return res.status(400).send(e);
    }
}

export default subscribedInfoController;