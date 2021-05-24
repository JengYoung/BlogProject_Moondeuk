import client from '../client';
const dislikeAPI = ({ userId, diaryId, typeName, typeId }) => {
    console.log({ userId, diaryId, typeName, typeId });
    return client.delete(`/routes/like/${userId}/${diaryId}/${typeName}/${typeId}`);
}
export default dislikeAPI;