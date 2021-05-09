import upload from '../../lib/upload.js';
import User from '../../models/user.js';

const imgUploadController = async (req, res) => {
    const { user_id } = req.params;
    const reqFiles = "";
    try {
        upload(req, res, function(arr) {
            if (err) {
                return res.status(400).send({
                    message: err.message,
                    files: reqFiles
                });
            }
            reqFiles = req.files[0].filename
            res.status(200).send({
                message: "Success",
                files: reqFiles
            });
            const user = await User.findById(user_id);
            await User.findByIdAndUpdate(user_id, { userImage: reqFiles }, (err, result) => {
                if (err) {
                    return res.status(500).send({
                        message: err.message,
                        files: reqFiles
                    })
                }
            })
        });
    } catch(err) {
        res.status(500).send({
            message: err,
            files: reqFiles
        });
    }
}

export default imgUploadController;