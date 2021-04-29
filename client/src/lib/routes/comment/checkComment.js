import client from '../client';

const checkCommentAPI = diary_id => 
    client.get(`/routes/comment/:${diary_id}`);

export default checkCommentAPI;
