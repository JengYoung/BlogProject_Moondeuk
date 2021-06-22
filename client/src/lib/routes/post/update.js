import client from '../client';

const updateAPI = ({ diaryId, title, subtitle, body, tags, titleStyle }) => {
    // console.log("updateAPI: ", diaryId, title, body, tags)
    return client.patch(`/routes/post/update/${diaryId}`, { title, subtitle, body, tags, titleStyle });
}

export default updateAPI;