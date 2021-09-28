import User from '../../models/user.js';

const userImgUploadController = async (req, res) => {
    const { user_id } = req.params;
    const { imgUrl } = req.body;
    try {
        await User.findByIdAndUpdate(user_id, { userImage: imgUrl }, (err, result) => {
            res.send(result);
        })
    } catch(err) {
        res.status(500).send({
            message: err,
            files: imgFile
        });
    }
}


export default userImgUploadController;