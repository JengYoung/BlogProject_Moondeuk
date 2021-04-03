import client from '../client';

const loginAPI = ({ userId, password }) => 
    client.post('/routes/auth/login', ({ userId, password }));

export default loginAPI