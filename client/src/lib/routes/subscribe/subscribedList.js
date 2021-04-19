import client from '../client';

const subscribedListAPI = ({userId}) =>
    client.get(`/routes/subscribe/subscribeInfo/${userId}`);

export default subscribedListAPI;