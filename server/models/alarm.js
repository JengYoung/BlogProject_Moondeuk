import mongoose from 'mongoose';

const alarmSchema = new Schema({
    sender_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    receiver_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    type: String,
    type_id: mongoose.Types.ObjectId,
    alarm_At: {
        type: Date,
        default: Date.now,
    },
    checkRead: Boolean,
})

const Alarm = mongoose.model('Alarm', alarmSchema);
export default Alarm;