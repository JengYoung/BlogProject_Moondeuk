import mongoose from 'mongoose';

const { Schema } = mongoose;

const replyCommentSchema = new Schema({
    comment_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    },
    replier_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    replierInfo: {
        userId: {
            type: 'String',
        },
        nickname: {
            type: 'String',
        },
    },
    content: '',
    replyAt: {
        type: Date,
        default: Date.now,
    },
});

const ReplyComment = mongoose.model('ReplyComment', replyCommentSchema);

export default ReplyComment;