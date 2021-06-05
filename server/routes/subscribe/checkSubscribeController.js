import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

const checkSubscribeController = async (req, res) => {
    const { subscribeTo, subscribedFrom } = req.body;
    if (!subscribeTo || !subscribedFrom) return
    try {
        const toInfo = await User.checkUserId(subscribeTo).lean();
        const fromInfo = await User.checkUserId(subscribedFrom).lean();
        if (!toInfo._id || !fromInfo._id) return res.status(404).send();
        const info = { subscribeTo: toInfo._id, subscribedFrom: fromInfo._id }
        const checkSubscribed = await Subscribe.checkSubscribeExist(info)
        return res.send(checkSubscribed);
    } catch(e) {
        res.status(400).send(e)
    }
}

export default checkSubscribeController;