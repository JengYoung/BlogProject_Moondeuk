import mongoose from 'mongoose';

const { Schema } = mongoose;

const neighborSchema = new Schema({
    following: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    followed: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Neighbor = mongoose.model('Neighbor', neighborSchema);
export default Neighbor;