import client from '../client'

const commentAPI = ({ user_id, diary_id }) => {
    return client.post(`/routes/comment/:${user_id}/:${diary_id}`);
}

export default commentAPI