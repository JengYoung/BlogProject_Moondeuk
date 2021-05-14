import client from '../client';

const updateAPI = ({ diaryId, title, body, tags }) => {
    // console.log("updateAPI: ", diaryId, title, body, tags)
    return client.patch(`/routes/post/update/${diaryId}`, { title, body, tags });
}

export default updateAPI;