import Comment from '../../models/comment.js';

const deleteCommentController = async (req, res) => {
    const { comment_id } = req.params;
    try {
        await Comment.findByIdAndDelete(comment_id, (err, result) => {
            if (err) res.status(404).send();
            return res.status(204).send(result);
        }).exec();
    } catch(e) {
        res.status(500).send(e);
    }
}

export default deleteCommentController;