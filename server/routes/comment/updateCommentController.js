import Comment from '../../models/comment.js';

const updateCommentController = async (req, res) => {
    const { comment_id } = req.params;
    const content = req.body;
    try {
        await Comment.findByIdAndUpdate(comment_id, content, { new: true }, ( err, result ) => {
            if (err) return res.status(404).send(err);
            return res.send(result);
        }).exec();
    } catch(e) {
        return res.status(500).send(e)
    }
}

export default updateCommentController;