import User from '../../models/user.js';
const userImgUploadController = async (req, res) => {
    const { user_id } = req.params;
    const imgFile = req.file;
    console.log("req.file - ", req.file);
    console.log("넌 또 왜...", user_id);
    try {
        await User.findByIdAndUpdate(user_id, { userImage: imgFile.path }, (err, result) => {
            if (err) {
                console.log("여기 에러 떳어. ", err)
            }
            console.log(result);
            // if (err) res.status(400).send({
            //     message: err.message,
            //     img: '',
            // });
            // res.send({
            //     message: "user's image update SUCCESS !",
            //     img: imgFile
            // });
        })
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: err,
            files: imgFile
        });
    }
}

export default userImgUploadController;