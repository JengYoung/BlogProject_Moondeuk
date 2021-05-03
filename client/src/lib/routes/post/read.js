import client from '../client';

const readAPI = id => {
    console.log("여기 api 아이디", id)
    return client.get(`/routes/post/${id}`);
}

export default readAPI;