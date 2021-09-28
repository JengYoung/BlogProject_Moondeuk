import client from '../client';

const userImgUploadAPI = (user_id, imgUrl) => {
    return client.post(`/routes/upload/${user_id}`, { imgUrl });
};

export default userImgUploadAPI;