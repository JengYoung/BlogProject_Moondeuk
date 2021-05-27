import client from '../client';

const writeAPI = ({ title, body, tags }) => {
    return client.post('/routes/post/write', { title, body, tags });
}
export default writeAPI;