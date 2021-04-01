import client from '../client'

export const register = ({ userId, password, nickname, birthday }) => {
    client.post('/routes/auth/register', { userId, password, nickname, birthday });
}