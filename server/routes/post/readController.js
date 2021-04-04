import mongoose from 'mongoose';
import Post from '../../models/post.js';

const { ObjectId } = mongoose.Types;
const readController = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findById(id).exec((err, result) => {
            if (!ObjectId.isValid(id)) return res.status(400).send('INVALID REQUEST (ID)') ;
            if (err) return res.status(404).send('NOT FOUND POST DATA');
            return res.send(result);
        });
    } catch(e) {
        res.status(500).send(e);
    }
}

export default readController;