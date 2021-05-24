import client from '../client';

const likeAPI = (params) => {
    const { userId, diaryId, typeName, typeId } = params;
    console.log("api: ", userId, diaryId)
    /*
        req.param: userId, diaryId
        req.body: typeName, typeId
    */
    return client.post(`/routes/like/${userId}/${diaryId}`, { typeName, typeId });
}
export default likeAPI