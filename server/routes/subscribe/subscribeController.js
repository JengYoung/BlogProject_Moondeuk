import Neighbor from '../../models/subscribe.js'

/* 친구 추가 */ 
const subscribeController = async (req, res) => {
    const addNeighbor = new Neighbor(req.body);
    const checkExist = Neighbor.checkSubscribeExist(req.body);
    if (checkExist) return res.status(409).send(); // Conflict;
    try{
        await addNeighbor.save();
        res.send(addNeighbor);
    } catch(e) {
        res.status(500).send(e);
    };
}
export default subscribeController;