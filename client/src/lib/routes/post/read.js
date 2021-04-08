import client from '../client';

const readAPI = id =>
    client.get(`/routes/post/${id}`);

export default readAPI;