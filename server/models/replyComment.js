import mongoose from 'mongoose';

const { Schema } = mongoose;

export const replyCommentSchema = new Schema({
    // 답글을 남길 때의 Comment ObjectId
    comment_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    },
    // replier_id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    // },
    // 대댓글을 다는 사람의 정보
    replierInfo: {
        _id: { type: mongoose.Types.ObjectId, ref: 'User' },
        userId: { type: String },
        nickname: { type: String },
        userImage: { type: String },
    },
    // 대댓글 달린 사람의 정보
    repliedInfo: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    content: String,
    replyAt: {
        type: Date,
        default: Date.now,
    },
});

const ReplyComment = mongoose.model('ReplyComment', replyCommentSchema);
export default ReplyComment;