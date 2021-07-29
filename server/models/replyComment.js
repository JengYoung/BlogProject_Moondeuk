import mongoose from 'mongoose';

const { Schema } = mongoose;

export const replyCommentSchema = new Schema({
    // 답글을 남길 때의 Comment ObjectId
    comment_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    },
    // 대댓글을 다는 사람의 정보
    // 닉네임은 갑자기 바뀌면 혼란을 줄 수 있으므로 댓글 달때의 닉네임은 유지시킨다.
    replier: {
        nickname: String,
        _id: {
            type: mongoose.Types.ObjectId, 
            ref: 'User' 
        }
    },
    // 대댓글 달린 사람의 정보
    replyTo: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Comment',
            default: null, // comment_id와 같을 시 null로 보냄.
        },
        nickname: {
            type: String,
            default: null
        }
    },
    content: String,
    replyAt: {
        type: Date,
        default: Date.now,
    },
});

const ReplyComment = mongoose.model('ReplyComment', replyCommentSchema);
export default ReplyComment;