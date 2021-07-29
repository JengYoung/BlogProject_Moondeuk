import client from '../client';

// const replyCommentAPI = ({ user_id, comment_id, content, replyTo_id }) => {
//     console.log("replyCommentAPI: ", user_id, comment_id, content, replyTo_id);
//     return client.post(`/routes/replycomment/${user_id}/${comment_id}`, { content, replyTo_id });
// };
const replyCommentAPI = ({ replyTo, content, nickname, comment_id, user_id }) => {
    // console.log("replyCommentAPI: ", user_id, comment_id, content, replyTo);
    return client.post('/routes/replycomment/', { replyTo, content, nickname, comment_id, user_id });
};
export default replyCommentAPI;