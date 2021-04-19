import client from '../client';

const subscribedListAPI = ({authorId}) =>
    client.get(`/routes/subscribe/subscribedInfo/${authorId}`);

export default subscribedListAPI;