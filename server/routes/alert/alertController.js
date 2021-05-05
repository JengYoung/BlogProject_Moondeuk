import Alert from '../../models/alert.js';

const alertController = async (req, res) => {
    const { sender_id, receiver_id, type, type_id } = req.body;
    if (!sender_id || !receiver_id || !type || !type_id) return res.status(400),send(e);

    const alert = new Alert({
        sender_id,
        receiver_id, 
        type,
        type_id
    });

    try {
        await alert.save();
        res.send(alert);
    } catch(e) {
        await res.status(400).send(e);
    };
}
export default alertController