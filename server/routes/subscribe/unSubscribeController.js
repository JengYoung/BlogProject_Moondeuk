import Subscribe from '../../models/subscribe.js';

const unSubscribeController = async (req, res) => {
    await Subscribe.findOneAndDelete(req.body, (err, result) => {
        if (err) return res.status(404).send('NOT FOUND');
        res.status(204).send()
    });
};

export default unSubscribeController;