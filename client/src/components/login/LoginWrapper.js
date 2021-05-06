import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import {Link} from 'react-router-dom';
import HeadName from '../common/HeadName';
import ErrorMessage from '../common/ErrorMessage';
/*
*/

const StyledLoginForm = styled.form`
    margin-top: 2rem;
    width: 300px;
    height: auto;
    padding: 1rem 3rem 0 3rem;
    background-color: transparent;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0px 10px 4px rgba(0,0,0,0.2);
`;

const Links = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
`;

const StyledLink = styled(Link)`
    color: black;
    transition: all 0.7s;
    &:hover {
        color: #a52ca5;
        transform: scale(1.03);
    }
`;
const LoginWrapper = ({onChange, onSubmit, error, inputs}) => {
    return (
        <StyledLoginForm onSubmit={onSubmit}>
            <HeadName name="로그인"></HeadName>
            <Input autoComplete="new-password" onChange={onChange} name="userId" value={inputs.userId}/>
            <Input onChange={onChange} type="password" name="password" value={inputs.password} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button fullWidth topMargin name="로그인" />
            <Links>
                <StyledLink to='/register'>회원가입</StyledLink>
            </Links>
        </StyledLoginForm>
    );
};

export default LoginWrapper;