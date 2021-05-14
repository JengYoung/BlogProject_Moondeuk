import User from '../../models/user.js';
const userImgUploadController = async (req, res) => {
    const { user_id } = req.params;
    const imgFile = req.file;
    try {
        await User.findByIdAndUpdate(user_id, { userImage: imgFile.path }, (err, result) => {
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