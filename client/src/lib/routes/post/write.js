import client from '../client';

const writeAPI = ({ title, subtitle, body, tags, titleStyle }) => {
    return client.post('/routes/post/write', { title, subtitle, body, tags, titleStyle });
}

export default writeAPI;