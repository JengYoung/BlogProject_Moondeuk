import User from '../../models/user.js';
import {check, validationResult} from 'express-validator';

export const validationCheck = async (req, res, next) => {
    await check('userId')
        .isLength({ min: 4, max: 16 })
        .withMessage('must be 4 ~ 16 chars long')
        .isAlphanumeric()
        .withMessage('must be consist of alphanum strings')
        .run(req);
    await check('password', 'must be 6 ~ 24 chars long').isLength({ min: 6, max: 24 }).run(req);
    await check('nickname', 'must be 2 ~ 8 chars long').isLength({ min: 2, max: 8 }).run(req);
    await check('birthday', 'must be number type with 6 digits').isLength(6).isNumeric().run(req);

    const result = validationResult(req)
    if (!result.isEmpty()) return res.json({ errors: result.array()});
    next();
}

const registerController = async (req, res) => {
    const { userId, password } = req.body;
    const data = new User(req.body);
    console.log(data)
    try {
        const IdExists = await User.checkUserId(userId)
        if (IdExists) return res.status(409).send('Conflict');
        await data.convertHashPassword(data, password);
        await data.save();
        res.send(data);
    } catch(e) {
        res.status(400).send(e);
    }
}
export default registerController;
