import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: {
        type: String,
        min: 4,
        max: 16,
        required: true,
    },
    password: {
        type: String,
        min: 6,
        max: 24,
        required: true,
    },
    nickname: {
        type: String,
        min: 2,
        max: 8,
        required: true,
    },
    birthday: {
        type: String,
        min: 6,
        max: 6,
        required: true,
    }
})

const User = mongoose.model('User', userSchema);
export default User;