import Post from '../../models/post.js';

const listController = async (req, res) => {
    const { tag, userId } = req.query;
    const query = {
        ...(userId ? { 'author.authorId': userId } : {}),
        ...(tag ? { tags: tag } : {})
    }
    try {
        const posts = await Post.find(query).exec();
        res.send(posts);
    } catch(e) {
        res.status(500).send(e);
    }
};

export default listController;