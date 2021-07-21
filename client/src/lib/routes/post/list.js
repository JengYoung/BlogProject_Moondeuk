import client from '../client';
import qs from 'qs';
const diaryListAPI = ({ authorId, tag, last_id = null }) => {
    const query = qs.stringify({
        userId: authorId,
        tag
    });
    return client.get(`/routes/post?${query}`, { last_id });
}

export default diaryListAPI;