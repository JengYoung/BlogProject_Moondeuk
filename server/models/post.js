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
});

const Post = mongoose.model('Post', PostSchema);
export default Post;