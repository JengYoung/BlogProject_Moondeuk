import Post from '../../models/post.js';

const deleteController = async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id, (err, result) => {
        if (err) return res.status(404).send('NOT FOUND');
        return res.status(204).send();
    })
}

export default deleteController;