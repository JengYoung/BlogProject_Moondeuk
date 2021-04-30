import ReplyComment from '../../models/replyComment.js';

const deleteReplyCommentController = async (req, res) => {
    const { replyComment_id } = req.params;
    console.log(replyComment_id);
    try {
        await ReplyComment.findByIdAndDelete( replyComment_id, (err, result) => {
            if (err) return res.status(404).send(' FOUND');
            return res.status(204).send();
        });
    } catch(e) {
        res.status(500).send(e);
    };
};

export default deleteReplyCommentController;