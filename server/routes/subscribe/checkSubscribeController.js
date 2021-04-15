import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

const checkSubscribeController = async (req, res) => {
    const { subscribeTo, subscribedFrom } = req.body;
    console.log(req.body);
    try {
        const toInfo = await User.checkUserId(subscribeTo);
        const fromInfo = await User.checkUserId(subscribedFrom);
        console.log("여기 문제", toInfo._id, fromInfo._id);
        if (!toInfo._id || !fromInfo._id) return res.status(404).send();
        const info = { subscribeTo: toInfo._id, subscribedFrom: fromInfo._id }
        const checkSubscribed = await Subscribe.checkSubscribeExist(info)
        return res.send(checkSubscribed);
    } catch(e) {
        res.status(400).send(e)
    }
}

export default checkSubscribeController;