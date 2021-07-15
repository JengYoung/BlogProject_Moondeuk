import React from 'react'
import SideWrap from '../components/common/SideWrap';
import AuthWrap from '../components/common/auth/AuthWrap'
import RegisterContainer from '../containers/auth/register/RegisterContainer'
import PageWrap from '../components/common/PageWrap';
import LogoWrap from '../components/common/LogoWrap';
import LoginBackgroundContainer from 'containers/auth/login/LoginBackgroundContainer';
import DarkModeBtn from 'components/common/DarkModeBtn';

function RegisterPage() {
    return (
        <PageWrap register="register">
            <SideWrap>
                <DarkModeBtn/>
                <AuthWrap register="register">
                    <LogoWrap register="register"></LogoWrap>
                    <RegisterContainer />
                </AuthWrap>
            </SideWrap>
            <LoginBackgroundContainer/>
        </PageWrap>
    )
}

export default RegisterPage
