import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

const checkSubscribeController = async (req, res) => {
    const { subscribeTo, subscribedFrom } = req.body;
    if (!subscribeTo || !subscribedFrom) return
    try {
        const toInfo = await User.checkUserId(subscribeTo).lean();
        console.log("여기도 가 1")
        const fromInfo = await User.checkUserId(subscribedFrom).lean();
        console.log("여기도 가 2", toInfo._id, fromInfo._id)
        if (!toInfo._id || !fromInfo._id) return res.status(404).send();
        console.log("여기도 가 3")
        const info = { subscribeTo: toInfo._id, subscribedFrom: fromInfo._id }
        console.log("여기도 가 4")
        const checkSubscribed = await Subscribe.checkSubscribeExist(info)
        console.log("여기도 가 5")
        return res.send(checkSubscribed);
    } catch(e) {
        res.status(400).send(e)
    }
}

export default checkSubscribeController;