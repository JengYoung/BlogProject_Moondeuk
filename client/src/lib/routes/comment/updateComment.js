import client from '../client';

const updateCommentAPI = commentId => 
    client.patch(`/routes/comment/:${commentId}`);

export default updateCommentAPI;