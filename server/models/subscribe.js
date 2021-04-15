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
    const { subscribeTo, subscribedFrom } = info;
    console.log("여기는 exist", subscribeTo, subscribedFrom )
    if (!subscribeTo || !subscribedFrom) return Error;
    return this.findOne({ subscribeTo, subscribedFrom });
};

const Subscribe = mongoose.model('Subscribe', subscribeSchema);
export default Subscribe;