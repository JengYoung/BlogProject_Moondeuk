import client from '../client';

const deleteCommentAPI = commentId => {
    return client.delete(`/routes/comment/${commentId}`);
}

export default deleteCommentAPI;