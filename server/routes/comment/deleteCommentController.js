import Comment from '../../models/comment.js';

const deleteCommentController = async (req, res) => {
    const { commentId } = req.params;
    try {
        await Comment.findByIdAndDelete(commentId, (err, result) => {
            if (err) res.status(404).send();
            return res.status(204).send();
        }).exec();
    } catch(e) {
        res.status(500).send(e);
    }
}

export default deleteCommentController;