import client from '../client';
import qs from 'qs';
const diaryListAPI = ({ userId, tag }) => {
    const query = qs.stringify({
        userId,
        tag
    });
    return client.get(`/routes/post?${query}`);
}

export default diaryListAPI;