import Post from '../../models/post.js';

const readController = async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findById(id).exec((err, result) => {
            // not exists post.
            if (err) return res.status(404).send('NOT FOUND POST DATA');
            res.send(result);
        });
    } catch(e) {
        res.status(500).send(e);
    }
}

export default readController;