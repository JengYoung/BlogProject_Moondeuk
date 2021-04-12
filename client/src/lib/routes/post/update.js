import client from '../client';

const updateAPI = ({ diaryId, title, body, tags }) => 
    client.patch(`/routes/post/update/${diaryId}`, { title, body, tags });

export default updateAPI;