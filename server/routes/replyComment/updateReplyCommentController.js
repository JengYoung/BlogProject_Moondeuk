import ReplyComment from '../../models/replyComment.js';

const updateReplyCommentController = async(req, res) => {
    const { replyComment_id } = req.params;
    const content = req.body;
    try {
        const updatedReplyComment = await ReplyComment.findByIdAndUpdate(replyComment_id, content, { new: true }, (err, result) => {
            if (err) return res.status(404).send(); // Cannot find Id
            return result;
        })
        return res.send(updatedReplyComment);
    } catch(e) {
        res.satus(500).send(e);
    };
};

export default updateReplyCommentController;