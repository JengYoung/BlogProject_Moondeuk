import client from '../client';

const deleteCommentAPI = commentId =>
    client.delete(`/routes/comment/${commentId}`);

export default deleteCommentAPI;