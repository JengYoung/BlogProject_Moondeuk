import Comment from '../../models/comment.js';

const updateCommentController = async (req, res) => {
    const { commentId } = req.params;
    const content = req.body;
    console.log(content)
    try {
        const comment = await Comment.findByIdAndUpdate(commentId, content, { new: true }, ( err, result ) => {
            if (err) return res.status(404).send(err);
            return result;
        }).exec();
        res.send(comment);
    } catch(e) {
        return res.status(500).send(e)
    }
}

export default updateCommentController;