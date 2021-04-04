import Post from '../../models/post.js';

const listController = async (req, res) => {
    try {
        const posts = await Post.find().exec();
        res.send(posts);
    } catch(e) {
        res.status(500).send(e);
    }
};

export default listController;