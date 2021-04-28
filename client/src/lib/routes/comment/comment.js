import client from '../client'

const commentAPI = ({ userId, diaryId }) => {
    return client.post(`/routes/comment/:${userId}/:${diaryId}`);
}

export default commentAPI