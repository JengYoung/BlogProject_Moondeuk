import client from '../client';

const alertAPI = (params) => {
    const { sender_id, receiver_id, type, type_id } = params;
    console.log("************************************alertAPI: ", sender_id, receiver_id, type, type_id);
    return client.post('/routes/alert/', { sender_id, receiver_id, type, type_id });
}

export default alertAPI;