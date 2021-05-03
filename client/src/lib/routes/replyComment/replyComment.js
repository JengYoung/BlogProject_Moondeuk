import client from '../client';

const replyCommentAPI = ({ user_id, comment_id, content, replyTo_id }) => {
    console.log("replyCommentAPI: ", user_id, comment_id, content, replyTo_id);
    client.post(`/routes/replycomment/${user_id}/${comment_id}`, { content, replyTo_id });
};

export default replyCommentAPI;