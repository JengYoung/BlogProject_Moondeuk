import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

const checkSubscribeController = async (req, res) => {
    const { subscribeTo, subscribedFrom } = req.body;
    const subscribeTo_id = await User.checkUserId(subscribeTo);
    const subscribedFrom_id = await User.checkUserId(subscribedFrom);
    
    try {
        const checkSubscribed = await Subscribe.find({ subscribeTo_id, subscribedFrom_id });
        if (checkSubscribed) return res.send(true);
    }catch(e) {
        res.status(404).send(e)
    }
}

export default checkSubscribeController;