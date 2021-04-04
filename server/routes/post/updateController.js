import Post from '../../models/post.js';

const updateController = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(req.body);
        await Post.findByIdAndUpdate(id, req.body, { new: true }, (err, result) => {
            if (err) res.status(404).send('NOT FOUND');
            return res.send(result);
        }).exec();
    } catch(e) {
        res.status(500).send(e);
    }
}
export default updateController;