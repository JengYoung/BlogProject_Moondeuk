import mongoose from 'mongoose';

const { Schema } = mongoose;

const likeSchema = new Schema({
    /* 
        like의 타입을 정의. (Diary (default) / Comment / ReplyComment)
    */
    typeName: {
        type: String,
        default: "Diary"
    },
    /*
        Type에서 like를 받고 있는 data의 id
    */ 
    typeId: {
        type: mongoose.Types.ObjectId,
    },
    /* 
        좋아요 한 사람의 아이디 (중복 방지 및 유저 확인)
    */
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    /*
        타입에 따라서 조회할 대상 고유 아이디
    */
    diaryId: {
        type: mongoose.Types.ObjectId,
        ref: 'Diary'
    },
    likeAt: {
        type: Date,
        default: Date.now
    }
});


likeSchema.statics.findData = async function({ user_id, diary_id }) {
    return await this.findOne({ user_id, diary_id });
}

const Like = mongoose.model('Like', likeSchema);
export default Like;