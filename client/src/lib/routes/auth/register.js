import client from '../client';

const registerAPI = ({ userId, password, nickname, birthday }) => 
    client.post('/routes/auth/register', { userId, password, nickname, birthday });

export default registerAPI;