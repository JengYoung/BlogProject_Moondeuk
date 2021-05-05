import Alert from '../../models/alert.js';
import User from '../../models/user.js';

const alertController = async (req, res) => {
    const { sender_id, type, type_id } = req.body;
    let { receiver_id } = req.body;
    if (!sender_id || !receiver_id || !type || !type_id) return res.status(400).send("여기 잘못");
    try {
        if (type === "Subscribe") {
            receiver_id = await User.findUser_id(receiver_id);
        }
        const alert = new Alert({ sender_id, receiver_id, type, type_id });
        await alert.save();
        res.send(alert);
    } catch(e) {
        await res.status(400).send(e);
    };
}
export default alertController