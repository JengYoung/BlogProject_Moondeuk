import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    author: {
        _id: mongoose.Types.ObjectId,
        authorId: String,
        default: '',
    },
    body: String,
    tags: [String],
    postedDate: {
        type: Date,
        default: Date.now,
    },
    titleStyle: {
        isCenter: {
            type: Boolean,
            default: true,
        },
        isFullSize: {
            type: Boolean,
            default: false,
        },
        thumbnail: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        fontColor: {
            type: String,
            default: 'black',
        },
    }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;