import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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

/* ID, PASSWORD CHECK */ 
userSchema.statics.checkUserId = function(userId) {
    return this.findOne({ userId });
};

/* get User Lists's id and nickname */
userSchema.statics.getUserIdAndNickname = async function(userList) {
    const result = await Promise.all(userList.map(async user => {
        const userInfo = await this.findById(user.subscribeTo).exec();
        const { userId, nickname } = userInfo;
        return { userId, nickname };
    }));
    return result;
}


userSchema.methods.checkUserPassword = async function(password) {
    const check = await bcrypt.compare(password, this.password);
    return check;
}

/* REGISTER - create hashedPassword, hide password data */ 
userSchema.methods.convertHashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
};

userSchema.methods.hidePassword = function() {
    const data = this.toJSON();
    delete data.password;
    return data;
}

userSchema.methods.grantAccessToken = function() {
    const { secretOrPublicKey } = process.env;
    const expiredTime = 1000 * 60 * 60 * 24 * 3;
    return jwt.sign({ _id: this._id, userId: this.userId }, secretOrPublicKey, { expiresIn: expiredTime });
};

const User = mongoose.model('User', userSchema);
export default User;