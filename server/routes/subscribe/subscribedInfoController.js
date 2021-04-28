import Subscribe from '../../models/subscribe.js';
import User from '../../models/user.js';

/* 해당 유저가 추가한 이웃 리스트 및 수를 전달. */
const subscribedInfoController = async (req, res) => {
    const { authorId } = req.params;
    const checkId = await User.checkUserId(authorId);
    const subscribeList = await Subscribe.find({ subscribeTo: checkId }).exec();
    try {
        const result = await User.getUserIdAndNickname(subscribeList, 'subscribedFrom');
        return res.send({ subscribedFromList: result, count: subscribeList.length });
    } catch(e) {
        return res.status(400).send(e);
    }
}

export default subscribedInfoController;