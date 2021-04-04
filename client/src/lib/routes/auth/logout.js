import client from '../client';

const logoutAPI = () =>
    client.post('/routes/auth/logout');

export default logoutAPI;