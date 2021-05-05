import client from '../client';

const checkAlertAPI = user_id => {
    console.log("checkAlertAPI: ", user_id)
    return client.get(`/rotes/alert/${user_id}`);
};

export default checkAlertAPI;

