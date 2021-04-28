import client from '../client';

const checkCommentAPI = diaryId => 
    client.get(`/routes/comment/:${diaryId}`);

export default checkCommentAPI;
