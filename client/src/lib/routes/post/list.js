import client from '../client';
import qs from 'qs';
const diaryListAPI = ({ userId, tag }) => {
    const query = qs.stringify({
        userId,
        tag
    });
    console.log("API: ", query)
    return client.get(`/routes/post?${query}`);
}

export default diaryListAPI;