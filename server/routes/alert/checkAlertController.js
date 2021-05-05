import Alert from '../../models/alert.js';
import User from '../../models/user.js';

const checkAlertController = async (req, res) => {
    const { user_id } = req.params;
    console.log(user_id)
    try {
        const userAlert = await Alert.find({ receiver_id: user_id }).exec();
        res.send(userAlert)
    } catch(e) {
        console.log(e)
        res.status(404).send(e);
    };
};

export default checkAlertController;