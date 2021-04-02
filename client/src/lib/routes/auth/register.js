import client from '../client';

export const registerAPI = ({ userId, password, nickname, birthday }) => 
    client.post('/routes/auth/register', { userId, password, nickname, birthday });

export default registerAPI;