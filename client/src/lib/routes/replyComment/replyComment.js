import client from '../client';

const replyCommentAPI = ({ user_id, comment_id, content }) => {
    console.log("replyCommentAPI: ", user_id, comment_id, content);
    client.post(`/routes/replycomment/${user_id}/${comment_id}`, { content });
};

export default replyCommentAPI;