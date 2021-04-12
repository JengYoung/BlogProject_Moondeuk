import client from '../client';

const deleteAPI = diaryId => 
    client.delete(`/routes/post/delete/${diaryId}`);

export default deleteAPI;