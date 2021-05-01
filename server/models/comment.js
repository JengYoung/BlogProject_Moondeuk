import mongoose from 'mongoose';
import replyCommentSchema from './replyComment.js';
import ReplyComment from './replyComment.js';

const { Schema } = mongoose;

const commentSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    diaryId: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
    },
    userInfo: {
        userId: {
            type: String,
        },
        nickname: {
            type: String,
        },
    },
    content: {
        type: String,
    },
    commentAt: {
        type: Date,
        default: Date.now,
    },
    replyComments: [replyCommentSchema]
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;