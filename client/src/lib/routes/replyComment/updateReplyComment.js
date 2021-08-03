import client from '../client';

const updateReplyCommentAPI = ({ replyComment_id, content }) => {
    console.log("updateReplyCommentAPI: ", { replyComment_id, content })
    return client.patch(`/routes/replycomment`, { replyComment_id, content })
}

export default updateReplyCommentAPI;