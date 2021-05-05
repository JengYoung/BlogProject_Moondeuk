import client from '../client';

const alertAPI = (params) => {
    const { sender_id, receiver_id, type, type_detail } = params;
    console.log("************************************alertAPI: ", sender_id, receiver_id, type, type_detail);
    return client.post('/routes/alert/', { sender_id, receiver_id, type, type_detail });
}

export default alertAPI;