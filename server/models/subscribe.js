import mongoose from 'mongoose';

const { Schema } = mongoose;

const subscribeSchema = new Schema({
    subscribeTo: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    subscribedFrom: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

subscribeSchema.statics.checkSubscribeExist = function(info) {
    return this.findOne(info);
};

const Subscribe = mongoose.model('Subscribe', subscribeSchema);
export default Subscribe;