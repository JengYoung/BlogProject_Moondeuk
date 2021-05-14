import User from '../../models/user.js';

const checkController = async (req, res) => {
    const user = req.user;
    if (!user) {
        res.status(401).send("Cannot find valid token...");
        return;
    }
    try {
        const userInfo = await User.findById(user._id);
        res.send(userInfo);
    } catch(e) {
        res.status(500).send(e);
    }
}

export default checkController;