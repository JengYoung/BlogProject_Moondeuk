import client from '../client';

const subscribeInfo = ({authorId}) =>
    client.get(`/routes/subscribe/subscribeInfo/${authorId}`);

export default subscribeInfo;