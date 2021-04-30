import mongoose from 'mongoose';

const { Schema } = mongoose;

const replyCommentSchema = new Schema({
    comment_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    },
    writer_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    writerInfo: {
        userId: {
            type: 'String',
        },
        nickname: {
            type: 'String',
        },
    },
    replyAt: {
        type: Date,
        default: Date.now,
    },
});

const ReplyComment = mongoose.connect('ReplyComment', replyCommentSchema);

export default ReplyComment;