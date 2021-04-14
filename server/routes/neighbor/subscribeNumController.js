import Neighbor from '../../models/neighbor.js';

/* 해당 유저를 친구로 추가한 사람 수를 전달. */
const subscribeNumController = async (req, res) => {
    const { following } = req.body;
    try {
        const result = await Neighbor.find({'following': following}).exec();
        return res.send({neighborNum: result.length});
    } catch(e) {
        return res.status(400).send(e);
    }
}

export default subscribeNumController;