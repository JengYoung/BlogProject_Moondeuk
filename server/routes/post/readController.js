import extractOmittedBodyText from '../../lib/extractOmittedBodyText.js';
import Post from '../../models/post.js';
import User from '../../models/user.js';
import getDate from '../../lib/getDate.js';

const readController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Post.findById(id).lean((err, result) => {
            // not exists post.
            if (err) return res.status(404).send('NOT FOUND POST DATA');
            return result
        });

        const { author, _id } = result;
        const [ beforeDiary ] = await Post.find({ author, '_id': {'$lt': _id} }).lean().sort({ postedDate: -1 }).limit(1)
        const [ afterDiary ] = await Post.find({ author, '_id': {'$gt': _id} }).lean().sort({ postedDate: 1 }).limit(1)
        result.beforeDiary = beforeDiary ? {
            ...beforeDiary,
            body: extractOmittedBodyText(beforeDiary.body),
            postedDate: getDate(beforeDiary.postedDate)

        } : null;
        result.afterDiary = afterDiary ? {
            ...afterDiary,
            body: extractOmittedBodyText(afterDiary.body),
            postedDate: getDate(afterDiary.postedDate)
        } : null;
        const { userImage } = await User.findById(result.author._id).lean();
        result.author = {
            ...result.author,
            userImage,
        }
        // mongoose는 기본값을 find 시에는 적용 X. 따라서 업데이트 함수를 만들어준다.
        if (!result.titleStyle) {
            await Post.findByIdAndUpdate(id, { 
                ...result, 
                titleStyle: {
                    "isCenter": true,
                    "isFullSize": false,
                    "thumbnail": "",
                    "color": "",
                    "fontColor": "black",
                    "font": ""
                }
            });
            result.titleStyle = {
                "isCenter": true,
                "isFullSize": false,
                "thumbnail": "",
                "color": "",
                "fontColor": "black",
                "font": ""
            }        
        }
        res.send(result);
    } catch(e) {
        res.status(500).send(e);
    }
}

export default readController;