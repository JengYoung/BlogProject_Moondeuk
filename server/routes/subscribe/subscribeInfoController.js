import Subscribe from '../../models/subscribe.js';

/* 해당 유저가 추가한 이웃 리스트 및 수를 전달. */
const subscribeInfoController = async (req, res) => {
    const { subscribeTo } = req.body;
    try {
        const result = await Subscribe.find({subscribeTo}).exec();
        return res.send({subscribeToList: result, count: result.length});
    } catch(e) {
        return res.status(400).send(e);
    }
}

export default subscribeInfoController;