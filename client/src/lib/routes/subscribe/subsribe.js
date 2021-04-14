import client from '../client';

const subscribeAPI = ({subscribeTo, subscribeFrom}) => 
    client.post('/subscribe', {subscribeTo, subscribeFrom})

export default subscribeAPI;