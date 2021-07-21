import client from '../client';

const readAPI = id => {
    return client.get(`/routes/post/${id}`);
}

export default readAPI;