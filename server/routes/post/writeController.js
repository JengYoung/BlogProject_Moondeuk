import { check, validationResult } from 'express-validator';
import Post from '../../models/post.js';
export const postValidationCheck = async (req, res, next) => {
    await check('title')
        .exists()
        .withMessage("제목을 입력해주세요.")
        .run(req);

    await check('body')
        .exists()
        .withMessage("내용을 입력해주세요.")
        .run(req);

    await check('tags')
        .custom(tag => {
            return (tag.map(t => typeof(t) !== 'string')).includes(true) ? false : true;
        })
        .withMessage("태그는 문자로 이루어져야 합니다.")
        .bail()
        .custom(tag => {
            if ((tag.map(t => t.trim().length === 0)).includes(true)) {
                return false
            }
            return true;
        })
        .withMessage("최소 1자 이상의 문자 태그를 입력해주세요.")
        .run(req)

    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(400).json({ errors: result.array() });
    return next();
}
const writeController = async (req, res) => {
    return;
}
export default writeController;