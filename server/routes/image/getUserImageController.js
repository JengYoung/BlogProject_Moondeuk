import fs from 'fs';

const getUserImageController = async(req, res) => {
    fs.readFile(`/uploads/10-1_DSC01117_OK20210510175119.jpg`, function(err, data) {
        res.writeHead(200, { 'Context-Type': 'multipart/form-data' })
        res.end(data);
    })
}

export default getUserImageController;