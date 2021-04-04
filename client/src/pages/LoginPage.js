import React from 'react'
import LoginBackground from '../components/login/LoginBackground'
import LoginContainer from '../containers/auth/login/LoginContainer'
function LoginPage() {
    return (
        <LoginBackground>
            <LoginContainer />
        </LoginBackground>  
    )
}

export default LoginPage
