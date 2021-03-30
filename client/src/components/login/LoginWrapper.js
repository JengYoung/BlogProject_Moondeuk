import React from 'react'
import styled from 'styled-components';
import Login from '../../images/Login.jpg';
import Button from '../common/Button';
import Input from '../common/Input';
import {Link} from 'react-router-dom';
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
    padding: 3rem 3rem 0 3rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
`;

const Links = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
`;

const StyledLink = styled(Link)`
    color: white;
    transition: all 0.7s;
    &:hover {
        color: yellow;
        opacity: 1;
        transform: scale(1.05);
    }
`;

const LoginWrapper = () => {
    return (
        <StyledLoginBackground>
            <StyledLoginForm>
                <Input type="아이디" />
                <Input type="비밀번호" />
                <Button type="로그인" />
                <Links>
                    <StyledLink to='/register'>회원가입</StyledLink>
                </Links>
            </StyledLoginForm>
        </StyledLoginBackground>
    );
};

export default LoginWrapper;