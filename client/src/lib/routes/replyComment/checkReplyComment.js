import client from '../client';

const checkReplyCommentAPI = (comment_id) =>
    client.get(`routes/replycomment/${comment_id}`); 

export default checkReplyCommentAPI;