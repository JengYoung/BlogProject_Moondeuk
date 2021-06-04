import client from '../client';

const writeAPI = ({ title, body, tags, titleStyle }) => {
    return client.post('/routes/post/write', { title, body, tags, titleStyle });
}

export default writeAPI;