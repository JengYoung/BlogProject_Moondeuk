import client from '../client';

const subscribeListAPI = ({authorId}) =>
    client.get(`/routes/subscribe/subscribeInfo/${authorId}`);

export default subscribeListAPI;