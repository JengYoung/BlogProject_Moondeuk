import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    subtitle: String,
    author: {
        _id: mongoose.Types.ObjectId,
        authorId: String
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
        font: {
            type: String,
            default: '',
        }
    }
});

const Post = mongoose.model('Post', postSchema);
postSchema.methods.postSetTitleStyle = async function(data, id) {
    // if (!data.titleStyle) {
    //     try {
    //         await Post.findByIdAndUpdate(id, { 
    //             ...data, 
    //             titleStyle: {
    //                 "isCenter": true,
    //                 "isFullSize": false,
    //                 "thumbnail": "",
    //                 "color": "",
    //                 "fontColor": "black",
    //                 "font": ""
    //             }
    //         });
    //     } catch(e) {
    //         throw new Error(e);
    //     }
    // }
    return await data;
}
export default Post;