import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

/* 친구 추가 */ 
const subscribeController = async (req, res) => {
    console.log(req.body);
    const { subscribeTo, subscribedFrom } = req.body;
    try {
        const subscribeTo_id = await User.checkUserId(subscribeTo);
        const subscribedFrom_id = await User.checkUserId(subscribedFrom);
        const subscribe = new Subscribe({
            subscribeTo: subscribeTo_id._id,
            subscribedFrom: subscribedFrom_id._id,
        });
        const checkExist = Subscribe.checkSubscribeExist(subscribe);
        if (checkExist) return res.status(409).send();
        await subscribe.save();
        res.send(subscribe);
    } catch(e) {
        res.status(404).send(e);
    }
    // const subscribe = new Subscribe(req.body);
    // const checkExist = Subscribe.checkSubscribeExist(req.body);
    // if (checkExist) return res.status(409).send(); // Conflict;
    // try{
    //     await subscribe.save();
    //     res.send(subscribe);
    // } catch(e) {
    //     res.status(500).send(e);
    // };
}
export default subscribeController;