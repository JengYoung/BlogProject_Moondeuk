import client from '../client';

const checkLikeAPI = (params) => {
    const { userId, diaryId } = params;
    return client.get(`/routes/like/${userId}/${diaryId}`);
}
    

export default checkLikeAPI;