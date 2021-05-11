import User from '../../models/user.js';

const checkController = async (req, res) => {
    const user = req.user;
    console.log("체크하는 중, ", user)
    if (!user) {
        res.status(401).send("Cannot find valid token...");
        return;
    }
    // const { _id } = user;
    try {
        const userInfo = await User.findById(user._id);
        console.log("UserInfo: ", userInfo)
        res.send(userInfo);
    } catch(e) {
        res.status(500).send(e);
    }
}

export default checkController;