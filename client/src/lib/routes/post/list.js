import client from '../client';
import qs from 'qs';
const diaryListAPI = ({ userId, tag }) => {
    const query = qs.stringify({
        userId,
        tag
    });
    return client.get(`/api/post?${query}`);
}

export default diaryListAPI;