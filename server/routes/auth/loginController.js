import User from '../../models/user.js';
const loginController = async (req, res) => {
    const {
        userId,
        password
    } = req.body;
    if (!userId || !password) return res.status(401).send({ type: 'all', message: '아이디, 비밀번호를 입력해주세요! 😅' });
    try {
        const user = await User.checkUserId(userId);
        if (!user) {
            return res.status(401).json({ type: 'username', message: '아이디가 존재하지 않아요! 😥' })
        }
        const checkValidPassword = await user.checkUserPassword(password);
        if (!checkValidPassword) {
            return res.status(401).json({ type: 'password', message: '비밀번호를 확인해주시겠어요? 😥' })
        }
        const accessToken = user.grantAccessToken();
        res.cookie('access_token', accessToken);
        res.send(user.hidePassword())
    } catch (e) {
        res.status(500).send({ type: 'server', message: '서버 오류 발생! 다시 시도해주세요 😅' })
    }
}
export default loginController;