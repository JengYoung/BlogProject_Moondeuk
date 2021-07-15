import React from 'react'
import SideWrap from '../components/common/SideWrap'
import LoginContainer from '../containers/auth/login/LoginContainer'
import PageWrap from '../components/common/PageWrap'
import DarkModeBtn from '../components/common/DarkModeBtn'
import LoginBackgroundContainer from 'containers/auth/login/LoginBackgroundContainer';
function LoginPage() {
    return (
        <PageWrap>
            <SideWrap>
                <DarkModeBtn/>
                <LoginContainer />
            </SideWrap>
            <LoginBackgroundContainer/>
        </PageWrap>
    )
}

export default LoginPage
