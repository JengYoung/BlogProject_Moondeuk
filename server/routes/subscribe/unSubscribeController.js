import Subscribe from '../../models/subscribe.js';

const unSubscribeController = async (req, res) => {
    console.log('말좀')
    console.log(req.body);
    await Subscribe.findOneAndDelete(req.body, (err, result) => {
        if (err) return res.status(404).send('NOT FOUND');
        res.status(204).send()
    });
};

export default unSubscribeController;