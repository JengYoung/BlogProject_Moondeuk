import ErrorMessage from 'components/common/ErrorMessage';
import { useCheckRegisterError } from 'lib/hooks/useError';
import React from 'react'
import styled from 'styled-components';
import InputBox from '../common/auth/InputBox';
import Button from '../common/Button';
import HeadName from '../common/HeadName';

/*
*/

const StyledRegisterFormWrapper = styled.form`
    @media screen and (min-width: 481px) {
        width: 400px;
        padding: 2rem 3rem 2rem 3rem;
    }
    width: 300px;
    max-height: 100%;
    padding: 2rem 2rem 2rem 2rem;
    background-color: transparent;
    border: 1px solid lightgray;
    margin-bottom: 3rem;
`;


const StyledRegisterBtn = styled(Button)`
    margin-top: 2rem;
`;

const RegisterForm = ({ inputs, onChange, onSubmit, error, isErrorEvent, setIsErrorEvent }) => {
    useCheckRegisterError(inputs, setIsErrorEvent)
    return (
        <StyledRegisterFormWrapper onSubmit={onSubmit}>
            <HeadName>회원가입</HeadName>
            <InputBox autoComplete="off" name="userId" onChange={onChange} isError={isErrorEvent.userId ? "userId" : null}/>
            <InputBox autoComplete="off" type="password" name="password" onChange={onChange} isError={isErrorEvent.password ? "password" : null}/>
            <InputBox autoComplete="off" type="password" name="passwordConform" onChange={onChange} isError={isErrorEvent.passwordConform ? "passwordConform" : null}/>
            <InputBox autoComplete="off" name="nickname" onChange={onChange} isError={isErrorEvent.nickname ? "nickname" : null}/>
            {error && <ErrorMessage error={error}>{error}</ErrorMessage>}
            <StyledRegisterBtn fullWidth>회원가입</StyledRegisterBtn>
        </StyledRegisterFormWrapper>
    );
};

export default RegisterForm;