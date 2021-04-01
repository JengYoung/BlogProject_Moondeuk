import client from '../client';

export const registerAPI = ({ userId, password, passwordConform, nickname, birthday }) => 
    client.post('/routes/auth/register', { userId, password, passwordConform, nickname, birthday });

export default registerAPI;