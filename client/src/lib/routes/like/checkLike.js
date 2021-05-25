import client from '../client';

const checkLikeAPI = (params) => {
    const { diaryId } = params;
    return client.get(`/routes/like/${diaryId}`);
}
    

export default checkLikeAPI;