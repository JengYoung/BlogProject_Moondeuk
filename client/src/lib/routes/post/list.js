import client from '../client';
import qs from 'qs';
const diaryListAPI = ({ authorId, tag, last_id }) => {
    const query = qs.stringify({
        userId: authorId,
        tag,
        last_id
    });
    return client.get(`/routes/post?${query}`);
}

export default diaryListAPI;