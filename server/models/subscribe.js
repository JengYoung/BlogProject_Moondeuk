import mongoose from 'mongoose';

const { Schema } = mongoose;

const subscribeSchema = new Schema({
    following: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    followed: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);
export default Subscribe;