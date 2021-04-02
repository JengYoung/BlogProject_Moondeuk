import User from '../../models/user.js';
import {check, validationResult} from 'express-validator';

export const validationCheck = async (req, res, next) => {
    await check('userId')
        .isLength({ min: 4, max: 16 })
        .withMessage('ID는 4~16자리여야 합니다.')
        .isAlphanumeric()
        .withMessage('ID는 영어, 한글, 숫자 조합이여야 합니다.')
        .run(req);
    await check('password', '비밀번호는 6~24자여야 합니다').isLength({ min: 6, max: 24 }).run(req);
    await check('nickname', '닉네임은 2~8자여야 합니다.').isLength({ min: 2, max: 8 }).run(req);
    await check('birthday', '생년월일은 6자리로 입력해주세요.(ex:940915)').isLength({ min: 6, max: 6 }).isNumeric().run(req);

    const result = validationResult(req)
    if (!result.isEmpty()) return res.json({ errors: result.array()});
    next();
}

const registerController = async (req, res) => {
    const { userId, password } = req.body;
    const data = new User(req.body);
    try {
        const IdExists = await User.checkUserId(userId)
        if (IdExists) return res.status(409).send('Conflict');
        await data.convertHashPassword(data, password);
        await data.save();
        res.send(data.hidePassword());
    } catch(e) {
        res.status(400).send(e);
    }
}
export default registerController;
