import React from 'react'
import LoginContainer from '../containers/auth/login/LoginContainer'
import DarkModeBtn from '../components/common/DarkModeBtn'
import LoginBackgroundContainer from 'containers/auth/login/LoginBackgroundContainer';
import AuthWrap from 'components/common/auth/AuthWrap';
function LoginPage() {
    return (
        <>
            <AuthWrap>
                <DarkModeBtn/>
                <LoginContainer />
            </AuthWrap>
            <LoginBackgroundContainer/>
        </>
    )
}

export default LoginPage
