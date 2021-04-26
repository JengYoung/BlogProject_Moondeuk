import client from '../client';

const dislikeAPI = (userId, diaryId) => 
    client.delete(`/routes/like/${userId}/${diaryId}`);

export default dislikeAPI;