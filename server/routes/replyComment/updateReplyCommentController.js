import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';

const updateReplyCommentController = async(req, res) => {
    const { replyComment_id, content } = req.body;
    try {
        await ReplyComment.findByIdAndUpdate(replyComment_id, { content }, { new: true }, (err, result) => {
            if (err) return res.status(404).send();
            return result;
        })
        res.send(result);
    } catch(e) {
        res.status(500).send(e);
    }
};

export default updateReplyCommentController;