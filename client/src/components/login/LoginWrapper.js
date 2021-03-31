import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import {Link} from 'react-router-dom';
/*
*/

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
        <StyledLoginForm>
            <Input colorWhite name="아이디" />
            <Input colorWhite name="비밀번호" />
            <Button fullWidth name="로그인" />
            <Links>
                <StyledLink to='/register'>회원가입</StyledLink>
            </Links>
        </StyledLoginForm>
    );
};

export default LoginWrapper;