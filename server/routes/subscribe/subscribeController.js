import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

/* 친구 추가 */ 
const subscribeController = async (req, res) => {
    const { subscribeTo, subscribedFrom } = req.body;
    try {
        const subscribeTo_id = await User.checkUserId(subscribeTo);
        const subscribedFrom_id = await User.checkUserId(subscribedFrom);
        const checkExist = await Subscribe.checkSubscribeExist({
            subscribeTo: subscribeTo_id._id,
            subscribedFrom: subscribedFrom_id._id,
        });
        if (checkExist) return res.status(409).send();

        const subscribe = new Subscribe({
            subscribeTo: subscribeTo_id._id,
            subscribedFrom: subscribedFrom_id._id,
        });

        await subscribe.save();
        res.send(subscribe);
    } catch(e) {
        res.status(400).send(e);
    }
}
export default subscribeController;