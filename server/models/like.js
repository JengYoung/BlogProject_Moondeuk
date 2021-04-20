import mongoose from 'mongoose';

const { Schema } = mongoose;

const likeSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    diaryId: {
        type: mongoose.Types.ObjectId,
        ref: 'post',
    }
});

const Like = mongoose.model('Like', likeSchema);
export default Like;