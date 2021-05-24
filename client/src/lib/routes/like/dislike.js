import client from '../client';
const dislikeAPI = (params) => {
    const { userId, diaryId, typeName, typeId } = params;
    return client.delete(`/routes/like/${userId}/${diaryId}`, { typeName, typeId });
}
export default dislikeAPI;