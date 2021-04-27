import client from '../client';
import qs from 'qs';
const diaryListAPI = ({ authorId, tag }) => {
    const query = qs.stringify({
        userId: authorId,
        tag
    });
    console.log("query - API: ", query);
    return client.get(`/routes/post?${query}`);
}

export default diaryListAPI;