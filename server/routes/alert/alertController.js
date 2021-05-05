import Alarm from '../../models/alarm.js'

const alertController = async (req, res) => {
    const { sender_id, receiver_id, type, type_id } = req.body;
    const alarm = new Alarm({
        sender_id,
        receiver_id, 
        type,
        type_id
    });
    try {
        await alarm.save();
        console.log(alarm)
    } catch(e) {
        await res.status(400).send(e);
    };
}
export default alertController