import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';

const deleteReplyCommentController = async(req, res) => {
    const { comment_id, replyComment_id } = req.params;
    try {
        let { replyComments } = await Comment.findById(comment_id).exec();
        replyComments = replyComments.filter(data => {
            if (data._id.toString() !== replyComment_id) return data
        })
        await Comment.findByIdAndUpdate(comment_id, { replyComments }, { new: true }, (err, result) => {
            if (err) return res.status(404).send();
            return res.send(result);
        })
    } catch(e) {
        res.status(500).send(e);
    }
}
export default deleteReplyCommentController;