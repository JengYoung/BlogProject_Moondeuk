import client from '../client';

const userImgUploadAPI = (user_id, imgUrl) => {
    console.log(imgUrl);
    return client.post(`/routes/upload/${user_id}`, { imgUrl });
};

export default userImgUploadAPI;