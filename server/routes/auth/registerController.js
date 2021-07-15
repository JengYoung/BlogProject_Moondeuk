import User from '../../models/user.js';
import { check, validationResult } from 'express-validator';

export const validationCheck = async (req, res, next) => {
    await check('userId')
        .custom(value => {
            let i;
            let b;
            let c;
            if (value != undefined && value != "") {
                for (b = i = 0; c = value.charCodeAt(i++); b += c >> 7 ? 2 : 1);
                if (b > 16 || b < 4) return false;
                else return true;
            } 
            else return false;
        })
        .withMessage('ID는 4~16자여야 해요! (한글은 1글자당 2자)😅')
        .custom(value => {
            const regex = /^[가-힣|a-z|A-Z|0-9|]+$/;
            const result = regex.test(value);
            return result ? true : false;
        })
        .withMessage('ID는 영어, 한글, 숫자만 사용 가능해요! 😅')
        .run(req);
    await check('password', '비밀번호는 6~24자여야 해요! 😅')
        .isLength({ min: 6, max: 24 })
        .run(req);
    await check('nickname', '닉네임은 최대 8글자(영문 16자)여야 해요! 😅')
        .custom(value => {
            let i;
            let b;
            let c;
            if (value != undefined && value != "") {
                for (b = i = 0; c = value.charCodeAt(i++); b += c >> 7 ? 1 : 0.5);
                if (b > 8 || b < 2) return false;
                else return true;
            } 
            else return false;
        })
        .custom(value => {
            const regex = /^[가-힣|a-z|A-Z|0-9|]+$/;
            const result = regex.test(value);
            return result ? true : false;
        })
        .withMessage('ID는 영어, 한글, 숫자만 사용 가능해요! 😅')
        .run(req);

    const result = validationResult(req)
    if (!result.isEmpty()) return res.json({ errors: result.array()});
    next();
}

const registerController = async (req, res) => {
    const { userId, password } = req.body;
    const data = new User(req.body);
    try {
        const IdExists = await User.checkUserId(userId)
        if (IdExists) return res.status(409).send({ type: 'username', message: '이미 사용중인 아이디에요! 😥'});
        await data.convertHashPassword(data, password);
        await data.save();
        res.send(data.hidePassword());
    } catch(e) {
        res.status(500).send({ type: 'server', message: '서버에서 오류가 발생했어요! 😅'});
    }
}
export default registerController;
