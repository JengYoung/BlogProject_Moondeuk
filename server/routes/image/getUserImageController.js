import fs from 'fs';

const getUserImageController = async(req, res) => {
    // const { user_id } = req.params;
    console.log("여기는 들어옴")
    fs.readFile(`/uploads/10-1_DSC01117_OK20210510175119.jpg`, function(err, data) {
        if (err) console.log(err);
        res.writeHead(200, { 'Context-Type': 'multipart/form-data' })
        res.end(data);
    })
    
    // const { userImage } = await User.findById(user_id).exec()
    // console.log(userImage);
}

export default getUserImageController;