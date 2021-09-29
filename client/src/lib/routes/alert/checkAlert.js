import client from '../client';

const checkAlertAPI = user_id => {
    return client.get(`/routes/alert/checkAlert/${user_id}`);
};

export default checkAlertAPI;

