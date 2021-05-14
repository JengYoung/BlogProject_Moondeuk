import Post from '../../models/post.js';
import sanitizeHtml from 'sanitize-html';
import sanitizeOption from '../../lib/sanitizePostOption.js';
const updateController = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const newData = { ...req.body };
    // if (newData.body) {
    //     newData.body = sanitizeHtml(newData.body, sanitizeOption);
    // }
    try {
        await Post.findByIdAndUpdate(id, newData, { new: true }, (err, result) => {
            if (err) res.status(404).send('NOT FOUND');
            return res.send(result);
        }).exec();
    } catch(e) {
        res.status(500).send(e);
    }
}
export default updateController;