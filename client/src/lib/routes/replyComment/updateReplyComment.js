import client from '../client';

const updateReplyCommentAPI = ({ comment_id, replyComment_id, content }) => {
    console.log("updateReplyCommentAPI: ", { comment_id, replyComment_id, content })
    return client.patch(`/routes/replycomment/${comment_id}/${replyComment_id}`, { comment_id, replyComment_id, content })
}

export default updateReplyCommentAPI;