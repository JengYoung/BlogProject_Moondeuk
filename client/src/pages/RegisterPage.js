import React from 'react'
import SideWrap from '../components/common/SideWrap';
import AuthWrap from '../components/common/auth/AuthWrap'
import RegisterContainer from '../containers/auth/register/RegisterContainer'
import PageWrap from '../components/common/PageWrap';
import LogoWrap from '../components/common/LogoWrap';

function RegisterPage() {
    return (
        <PageWrap register="register">
            <SideWrap>
                <AuthWrap register="register">
                    <LogoWrap register="register"></LogoWrap>
                    <RegisterContainer />
                </AuthWrap>
            </SideWrap>
        </PageWrap>
    )
}

export default RegisterPage
