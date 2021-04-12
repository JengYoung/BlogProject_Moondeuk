import client from '../client';

const deleteAPI = diaryId => 
    client.delete(`/routes/post/${diaryId}`);

export default deleteAPI;