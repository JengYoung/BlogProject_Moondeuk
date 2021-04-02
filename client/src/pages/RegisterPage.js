import React from 'react'
import LoginBackground from '../components/login/LoginBackground'
import RegisterContainer from '../containers/auth/register/RegisterContainer'

function RegisterPage() {
    return (
        <LoginBackground>
            <RegisterContainer />
        </LoginBackground>
    )
}

export default RegisterPage
