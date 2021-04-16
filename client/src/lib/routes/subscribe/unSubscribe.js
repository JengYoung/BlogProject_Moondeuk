import client from '../client';

const unSubscribeAPI = ({ subscribeTo, subscribedFrom }) =>
    client.post('/routes/subscribe/unSubscribe', { subscribeTo, subscribedFrom });

export default unSubscribeAPI