import client from '../client';

const checkSubscribeAPI = ({ subscribeTo, subscribedFrom }) => 
    client.get('/routes/subscribe/check', { subscribeTo, subscribedFrom });

export default checkSubscribeAPI;