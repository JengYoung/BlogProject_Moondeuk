import alertMessage from '../../lib/alertMessage.js';
import Alert from '../../models/alert.js';
import User from '../../models/user.js';

const checkAlertController = async (req, res) => {
    const { user_id } = req.params;
    try {
        const userAlert = await Alert.find({ receiver_id: user_id }).exec();
        const result = await Promise.all(userAlert.map(async eachAlert => {
            const { sender_id, receiver_id, type, type_detail, alarm_At, checkRead } = eachAlert
            const message = await alertMessage(eachAlert);
            const newAlert = {
                sender_id,
                receiver_id,
                type,
                type_detail,
                alarm_At,
                message,
                checkRead
            }
            console.log(newAlert)
            return newAlert
        }));
        console.log("userAlert: ", result)
        res.send(result)
    } catch(e) {
        console.log(e)
        res.status(404).send(e);
    };
};

export default checkAlertController;