import User from '../../models/user.js';
import jwt from 'jsonwebtoken';

const jwtCheck = async (req, res, next) => {
    const nowToken = req.cookies.access_token; 
    const { secretOrPublicKey } = process.env;
    if (!nowToken) return next(); // token이 없을 시 바로 다음 처리.
    try {
        const decoded = jwt.verify(nowToken, secretOrPublicKey);
        req.user = {
            _id: decoded._id,
            userId: decoded.userId,
        };
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp -now < 60 * 60 * 12) {
            const user = await User.findById(decoded._id);
            const newToken = user.grantAccessToken();
            res.cookie('access_token', newToken);
        }
        return next();
    } catch(e) {
        return next();
    }
};

export default jwtCheck;