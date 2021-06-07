import User from '../../models/user.js';
import Post from '../../models/post.js'

const SearchController = async (req, res) => {
    /*
    * params: keyword
    * 만약 띄어쓰기가 있으면 
    * 태그 -> 붙여쓰기
    * 제목 -> 띄어쓰기를 +로 바꿔줌
    */ 

    const { keywordType, keyword } = req.params;
    try {
        if (keywordType === 'user') {
            const idData = await User.find({ userId: keyword }).lean();
            const nicknameData = await User.find({ nickname: keyword }).lean();
            return res.send({ idData, nicknameData })
        } 
        if (keywordType === 'title') {
            const titleData = await Post.find({ title: keyword }).lean();
            return res.send({ titleData });
        } 
        if (keywordType === 'tag') {
            const refinedKeyword = keyword.replaceAll(' ', '');
            const tagData = await Post.find({ tag: refinedKeyword }).lean();
            return res.send({ tagData });
        }
    } catch(e) {
        res.status(400).send(e); // 잘못된 요청
    }
}

export default SearchController;