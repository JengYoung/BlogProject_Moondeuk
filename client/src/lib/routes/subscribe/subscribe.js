import client from '../client';

const subscribeAPI = ({subscribeTo, subscribedFrom}) => 
    client.post('/routes/subscribe', { subscribeTo, subscribedFrom })

export default subscribeAPI;