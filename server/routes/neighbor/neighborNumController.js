import Neighbor from '../../models/neighbor';

const neighborNumController = async (req, res) => {
    const { following } = req.body;
    try {
        await Neighbor.find({'following': following}).exec();
        return res.send(result.length);
    } catch(e) {
        return res.status(400).send(err);
    }
}

export default neighborNumController;