import client from '../client';

const likeAPI = (params) => {
    const { userId, diaryId } = params;
    console.log("api: ", userId, diaryId)
    return client.post(`/routes/like/${userId}/${diaryId}`);
}

export default likeAPI