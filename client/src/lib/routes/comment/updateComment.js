import client from '../client';

const updateCommentAPI = ({ _id, updatedContent }) => {
    return client.patch(`/routes/comment/${_id}`, { content: updatedContent });
}
    

export default updateCommentAPI;