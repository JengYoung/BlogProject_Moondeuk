import Alert from '../../models/alert.js';

const conformAlertController = async (req, res) => {
    const { user_id } = req.params;
    try {
        const alerts = await Alert.find({ receiver_id: user_id }).exec();
        const result = await Promise.all(
            alerts.map(async alert => {
                if (alert.checkRead === false) { 
                    const updatedAlert = await Alert.findByIdAndUpdate(alert._id, { checkRead: true }, { new: true }).exec();
                    return updatedAlert;
                }
                return alert
            }
        ));
        res.send(result);
    } catch(e) {
        res.status(400).send(e)
    };
}

export default conformAlertController;