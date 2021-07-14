import React from 'react'
import SideWrap from '../components/common/SideWrap'
import AuthWrap from '../components/common/auth/AuthWrap'
import LoginContainer from '../containers/auth/login/LoginContainer'
import LoginImageWrap from '../components/login/LoginImageWrap'
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
            <LoginImageWrap/>
        </PageWrap>
        
        // <LoginBackground>
        //     <LoginContainer />
        // </LoginBackground>  
    )
}

export default LoginPage
