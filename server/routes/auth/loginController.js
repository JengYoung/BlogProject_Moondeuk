import User from '../../models/user.js';

const loginController = async (req, res) => {
    const { userId, password } =  req.body;
    if (!userId || !password) return res.status(401).send('UnAuthorized');
    try {
        const user = await User.checkUserId(userId);
        if (!user) {
            return res.status(401).send('Id가 존재하지 않습니다.');
        }
        const checkValidPassword = await user.checkUserPassword(password);
        if (!checkValidPassword) {
            return res.status(401).send('비밀번호가 틀립니다.')
        }
        console.log(user);
        const accessToken = user.grantAccessToken();
        res.cookie('access_token', accessToken);
        res.send(user.hidePassword());
    } catch(e) {
        res.status(500).send(e);
    }
}
export default loginController;