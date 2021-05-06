import React from 'react'
import SideWrap from '../components/common/SideWrap'
import AuthWrap from '../components/common/auth/AuthWrap'
import LoginBackground from '../components/login/LoginBackground'
import LoginContainer from '../containers/auth/login/LoginContainer'
import LoginImageWrap from '../components/login/LoginImageWrap'
import PageWrap from '../components/common/PageWrap'
function LoginPage() {
    return (
        <PageWrap>
            <SideWrap>
                <AuthWrap></AuthWrap>
            </SideWrap>
            <LoginImageWrap/>
        </PageWrap>
        
        // <LoginBackground>
        //     <LoginContainer />
        // </LoginBackground>  
    )
}

export default LoginPage
