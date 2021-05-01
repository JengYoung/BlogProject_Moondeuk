import mongoose from 'mongoose';

const { Schema } = mongoose;

const replyCommentSchema = new Schema({
    replier_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    repliedTo_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    content: '',
    replyAt: {
        type: Date,
        default: Date.now,
    },
});

export default replyCommentSchema;
// const ReplyComment = mongoose.model('ReplyComment', replyCommentSchema);

// export default ReplyComment;