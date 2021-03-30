import React from 'react'
import styled from 'styled-components';
import Login from '../../images/Login.jpg';
import Input from '../common/Input';
/*
*/

const StyledLoginBackground = styled.div`
    &::before {
        content:'';
        position: absolute;
        z-index: -99;
        background-image: url(${Login});
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const StyledLoginForm = styled.form`
    width: 300px;
    height: auto;
    padding: 3rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
`;

const LoginWrapper = () => {
    return (
        <StyledLoginBackground>
            <StyledLoginForm>
                <Input type="아이디" />
                <Input type="비밀번호" />
            </StyledLoginForm>
        </StyledLoginBackground>
    );
};

export default LoginWrapper;