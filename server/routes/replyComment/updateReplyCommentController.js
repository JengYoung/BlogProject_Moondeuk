import Comment from '../../models/comment.js';
import ReplyComment from '../../models/replyComment.js';

const updateReplyCommentController = async(req, res) => {
    const { comment_id, replyComment_id } = req.params;
    const { content } = req.body;
    try {
        let { replyComments } = await Comment.findById(comment_id).exec();
        let [ replyComment ] = await Comment.findReplyComment(comment_id, replyComment_id);
        replyComment.content = content;
        replyComments = replyComments.map(data => {
            if (data._id.toString() === replyComment_id) data = replyComment;
            return data
        })
        const result = await Comment.findByIdAndUpdate(comment_id, { replyComments }, { new: true }, (err, result) => {
            if (err) return res.status(404).send();
            return result;
        })
        res.send(result);
    } catch(e) {
        res.status(500).send(e);
    }

};

export default updateReplyCommentController;