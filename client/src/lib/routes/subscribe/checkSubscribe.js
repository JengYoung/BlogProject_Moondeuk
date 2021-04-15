import client from '../client';

const checkSubscribeAPI = ({ subscribeTo, subscribedFrom }) => 
    client.post('/routes/subscribe/check', { subscribeTo, subscribedFrom });

export default checkSubscribeAPI;