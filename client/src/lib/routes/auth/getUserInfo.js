import client from '../client'

const getUserInfoAPI = ({ userId }) => {
    return client.post('/routes/auth/getUserInfo', { userId });
}

export default getUserInfoAPI