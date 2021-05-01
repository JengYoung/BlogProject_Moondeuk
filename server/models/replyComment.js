import mongoose from 'mongoose';

const { Schema } = mongoose;

const replyCommentSchema = new Schema({
    replier_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    replierInfo: {
        userId: { type: String },
        nickname: { type: String },
    },
    replyTo_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        default: null,
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