import client from '../client'

const commentAPI = (params) => {
    const { user_id, diary_id, content } = params;
    return client.post(`/routes/comment/${user_id}/${diary_id}`, { content });
}

export default commentAPI