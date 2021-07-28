import ReplyComment from '../../models/replyComment.js';

const deleteReplyCommentController = async(req, res) => {
    const { replyComment_id } = req.params;
    try {
        await ReplyComment.findByIdAndDelete(replyComment_id, (err, result) => {
            if (err) res.status(404).send(err);
            return result;
        });
    } catch(e) {
        res.status(500).send(e);
    }
}
export default deleteReplyCommentController;