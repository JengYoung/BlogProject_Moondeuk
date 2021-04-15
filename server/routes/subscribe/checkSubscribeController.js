import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

const checkSubscribeController = async (req, res) => {
    const { subscribeTo, subscribedFrom } = req.body;
    const subscribeTo_id = await User.checkUserId(subscribeTo)._id;
    const subscribedFrom_id = await User.checkUserId(subscribedFrom)._id;
    try {
        const checkSubscribed = await Subscribe.find({ subscribeTo_id, subscribedFrom_id });
        return res.send(checkSubscribed);
    } catch(e) {
        res.status(404).send(e)
    }
}

export default checkSubscribeController;