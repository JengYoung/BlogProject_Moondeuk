import User from '../../models/user.js';
import Post from '../../models/post.js';
import extractOmittedBodyText from '../../lib/extractOmittedBodyText.js';

const SearchController = async (req, res) => {
    /*
    * params: keyword
    * 만약 띄어쓰기가 있으면 
    * 태그 -> 붙여쓰기
    * 제목 -> 띄어쓰기를 +로 바꿔줌
    */ 
    console.log("hi")
    const { keywordType, keyword } = req.params;
    try {

        switch(keywordType) {
            case 'user':
                const userRegex = new RegExp(`^${keyword}+`);
                const idData = await User.find({ userId: { $regex: userRegex, $options: 'i' } }).lean();
                const idResult = idData.map(data => {
                    const { userId, nickname, userImage } = data;
                    return {
                        userId,
                        nickname,
                        userImage,
                    }
                })
                const nicknameData = await User.find({ nickname: { $regex: userRegex, $options: 'i' } }).lean();
                const nicknameResult = nicknameData.map(data => {
                    const { userId, nickname, userImage } = data;
                    return {
                        userId,
                        nickname,
                        userImage,
                    }
                })
                return res.send({ keywordType, idData: idResult, nicknameData: nicknameResult })
            case 'title': 
                const titleRegex = new RegExp(`${keyword}+`);
                const titleData = await Post.find({ title: { $regex: titleRegex, $options: 'x' } }).lean();
                const refinedData = await Promise.all(titleData.map(async data => {
                    const userInfo = await User.findById(data.author._id).lean();
                    const { userId, nickname, userImage } = userInfo;
                    return {
                            ...data,
                            body: extractOmittedBodyText(data.body),
                            author: {
                                userId,
                                nickname,
                                userImage
                            }
                        }
                    }))
                return res.send({ keywordType, titleData: refinedData });
            case 'tag':
                // 만약 해시태그를 앞에 붙여도, 띄어쓰기를 해도 없어지도록 정규표현식 작성
                const tagRegex = new RegExp(`${keyword}`);
                const tagData = await Post.find({ tag: { $regex: keyword, $options: 'x', $in: [tagRefinedKeyword] }}).lean();
                return res.send({ keywordType, tagData });
            default:
                return res.status(400).send(e);
        }
    } catch(e) {
        res.status(400).send(e); // 잘못된 요청
    }
}

export default SearchController;