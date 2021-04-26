import client from '../client';

const likeListAPI = diaryId =>
    client.get(`/routes/like/${diaryId}`);

export default likeListAPI;