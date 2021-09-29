import client from '../client';

const conformAlertAPI = user_id => {
    return client.patch(`/routes/alert/conformAlert/${user_id}`);
}

export default conformAlertAPI;