import client from '../client';

const updateCommentAPI = ({ _id, updatedContent }) => {
    console.log("API: ", _id, updatedContent);
    return client.patch(`/routes/comment/${_id}`, { content: updatedContent });
}
    

export default updateCommentAPI;