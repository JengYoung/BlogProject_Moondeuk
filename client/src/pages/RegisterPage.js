import React from 'react';
import AuthWrap from '../components/common/auth/AuthWrap'
import RegisterContainer from '../containers/auth/register/RegisterContainer'
import LogoWrap from '../components/common/LogoWrap';
import LoginBackgroundContainer from 'containers/auth/login/LoginBackgroundContainer';
import DarkModeBtn from 'components/common/DarkModeBtn';
import QuestionBox from 'components/register/QuestionBox';


function RegisterPage() {
    return (
        <>
            <AuthWrap>
                <DarkModeBtn/>
                <QuestionBox>
                    <LogoWrap register="register"></LogoWrap>
                    <RegisterContainer />
                </QuestionBox>
                <LoginBackgroundContainer register/>
            </AuthWrap>
        </>
    )
}

export default RegisterPage
