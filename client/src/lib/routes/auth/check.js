import client from '../client';

const checkAPI = () => 
    client.get('/routes/auth/check');

export default checkAPI