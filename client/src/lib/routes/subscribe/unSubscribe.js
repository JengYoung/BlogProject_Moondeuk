import client from '../client';

const unSubscribeAPI = ({ subscribeTo, subscribedFrom }) =>
    client.post('/routes/unSubscribe', { subscribeTo, subscribedFrom });

export default unSubscribeAPI