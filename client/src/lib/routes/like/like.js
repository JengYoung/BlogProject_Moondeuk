import client from '../client';

const likeAPI = (userId, diaryId) => 
    client.post(`/routes/like/${userId}/${diaryId}`);

export default likeAPI