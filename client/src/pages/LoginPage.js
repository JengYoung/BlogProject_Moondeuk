import React from 'react'
import SideWrap from '../components/common/SideWrap'
import AuthWrap from '../components/common/auth/AuthWrap'
import LoginContainer from '../containers/auth/login/LoginContainer'
import LoginBackground from '../components/login/LoginBackground';
import PageWrap from '../components/common/PageWrap'
import LogoWrap from '../components/common/LogoWrap'
import DarkModeBtn from '../components/common/DarkModeBtn'
function LoginPage() {
    return (
        <PageWrap>
            <SideWrap>
                <AuthWrap>
                    <DarkModeBtn/>
                    <LogoWrap></LogoWrap>
                    <LoginContainer />
                </AuthWrap>
            </SideWrap>
            <LoginBackground/>
        </PageWrap>
    )
}

export default LoginPage
