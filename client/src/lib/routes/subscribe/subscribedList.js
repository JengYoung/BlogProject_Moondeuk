import client from '../client';

const subscribedListAPI = ({authorId}) =>
    client.get(`/routes/subscribe/subscribeInfo/${authorId}`);

export default subscribedListAPI;