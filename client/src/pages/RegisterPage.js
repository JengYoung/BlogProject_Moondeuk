import React from 'react'
import SideWrap from '../components/common/SideWrap';
import AuthWrap from '../components/common/auth/AuthWrap'
import LoginBackground from '../components/login/LoginBackground'
import RegisterContainer from '../containers/auth/register/RegisterContainer'
import PageWrap from '../components/common/PageWrap';
import RegisterInputBoxWrap from '../components/register/RegisterInputBoxWrap';
import LogoWrap from '../components/common/LogoWrap';
import HeadName from '../components/common/HeadName';

function RegisterPage() {
    return (
        <PageWrap register="register">
            <SideWrap>
                <AuthWrap register="register">
                    <LogoWrap register="register"></LogoWrap>
                    {/* <HeadName >회원가입</HeadName>
                    <RegisterInputBoxWrap></RegisterInputBoxWrap> */}
                    <RegisterContainer />
                </AuthWrap>
                {/* <RegisterContainer /> */}
            </SideWrap>
        </PageWrap>
        
        // <LoginBackground>
        //     <RegisterContainer />
        // </LoginBackground>
    )
}

export default RegisterPage
