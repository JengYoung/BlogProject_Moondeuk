import Post from '../../models/post.js';
import sanitizeHtml from 'sanitize-html';
import sanitizePostOption from '../../lib/sanitizePostOption.js';
const updateController = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(req.body);
        const newBody = {
            ...req.body,
            body: sanitizeHtml(req.body, sanitizePostOption),
        };
        console.log(newBody);
        await Post.findByIdAndUpdate(id, newBody, { new: true }, (err, result) => {
            if (err) res.status(404).send('NOT FOUND');
            return res.send(result);
        }).exec();
    } catch(e) {
        res.status(500).send(e);
    }
}
export default updateController;