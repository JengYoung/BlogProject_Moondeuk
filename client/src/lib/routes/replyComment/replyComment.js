import client from '../client';

const replyCommentAPI = ({ replyTo, content, nickname, comment_id, user_id }) => {
    return client.post('/routes/replycomment/', { replyTo, content, nickname, comment_id, user_id });
};
export default replyCommentAPI;