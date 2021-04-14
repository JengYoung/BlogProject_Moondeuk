import Neighbor from '../../models/neighbor.js'

const subscribeController = async (req, res) => {
    const addNeighbor = new Neighbor(req.body);
    try{
        await addNeighbor.save();
        res.send(addNeighbor);
    } catch(e) {
        res.status(500).send(e);
    };
}
export default subscribeController;