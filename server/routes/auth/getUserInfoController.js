import User from '../../models/user.js';

const getUserInfoController = async (req, res) => {
    const { userId } = req.body;
    console.log(req.body)
    try {
        const userInfo = await User.findOne({ userId }).lean();
        if (!userInfo) return res.status(404).send(e);
        const { nickname, userImage } = userInfo;
        res.send({ userId, nickname, userImage });
    } catch(e) {
        res.status(400).send(e);
    };
};

export default getUserInfoController