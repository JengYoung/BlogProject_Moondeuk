import alertMessage from '../../lib/alertMessage.js';
import Alert from '../../models/alert.js';
import User from '../../models/user.js';

const checkAlertController = async (req, res) => {
    const { user_id } = req.params;
    try {
        const userAlert = await Alert.find({ receiver_id: user_id })
                                    .lean()
                                    .sort({alertAt: -1});
        const result = await Promise.all(userAlert.map(async eachAlert => {
            const { _id, sender_id, receiver_id, type, type_detail, alertAt, checkRead } = eachAlert
            console.log(eachAlert)
            const { userImage } = await User.findById(sender_id);
            const message = await alertMessage(eachAlert);
            if (type_detail.content) {
                if (type_detail.content.length > 20) type_detail.content = type_detail.content.slice(0,20) + `...`;
            }

            const newAlert = {
                _id,
                sender_id,
                receiver_id,
                type,
                type_detail,
                alertAt,
                message,
                checkRead,
                userImage,
            }
            // console.log(newAlert)
            return newAlert
        }));
        // console.log("userAlert: ", result)
        res.send(result)
    } catch(e) {
        console.log(e)
        res.status(404).send(e);
    };
};

export default checkAlertController;