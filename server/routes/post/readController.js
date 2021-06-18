import Post from '../../models/post.js';

const readController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Post.findById(id).lean((err, result) => {
            // not exists post.
            if (err) return res.status(404).send('NOT FOUND POST DATA');
            return result
        });
        const { author, _id } = result;
        const [ beforeDiary ] = await Post.find({ author, '_id': {'$lt': _id} }).lean().sort({ postedDate: -1 }).limit(1)
        const [ afterDiary ] = await Post.find({ author, '_id': {'$gt': _id} }).lean().sort({ postedDate: 1 }).limit(1)
        result.beforeDiary = beforeDiary;
        result.afterDiary = afterDiary;
        res.send(result);
    } catch(e) {
        res.status(500).send(e);
    }
}

export default readController;