import client from '../client';

const userImgUploadAPI = (user_id, file) => {
    console.log(file[0])
    const formData = new FormData();
    formData.append("file", file[0])
    return client.post(`/routes/upload/${user_id}`, formData).then(response => console.log(response.data));
};

export default userImgUploadAPI;