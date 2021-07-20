import React from 'react'
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import {Link} from 'react-router-dom';
import ErrorMessage from '../common/ErrorMessage';
import LogoWrap from 'components/common/LogoWrap';
/*
*/
const StyledLogo = styled(LogoWrap)`
    padding-bottom: 2rem;
`;
const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
    height: auto;
    padding: 2rem 2rem 2rem 2rem;
    max-width: 300px;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0px 10px 4px rgba(0,0,0,0.2);
`;

const StyledLink = styled(Link)`
    padding-top: 1rem;
    ${({ theme }) => css`color: ${theme.linkColor};`}
    text-decoration: none;
    transition: all 0.7s;
    &:hover {
        ${({ theme }) => css`color: ${theme.event.hoverBg};`}
        transform: scale(1.03);
    }
`;
const LoginInput = styled(Input)`
    ${({ idError }) => idError && css`
        background: #ffbbbb;
    `}
    ${({ passwordError }) => passwordError && css`
        background: #ffbbbb;
    `}
`;
const LoginWrapper = ({onChange, onSubmit, error, idError, passwordError}) => {
    return (
        <StyledLoginForm onSubmit={onSubmit}>
            <StyledLogo/>
            <LoginInput autoComplete="new-password" onChange={onChange} name="userId" idError={idError}/>
            <LoginInput onChange={onChange} type="password" name="password" passwordError={passwordError}/>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button fullWidth topMargin>로그인</Button>
            <StyledLink to='/register'>회원가입</StyledLink>
        </StyledLoginForm>
    );
};

export default LoginWrapper;