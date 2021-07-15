import ErrorMessage from 'components/common/ErrorMessage';
import { checkRegisterInputError } from 'lib/hooks/useError';
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
    const HandleChange = (e) => {
        const { name, value } = e.target;
        onChange(e);
        checkRegisterInputError(inputs, name, value, setIsErrorEvent)
    }
    return (
        <StyledRegisterFormWrapper onSubmit={onSubmit}>
            <HeadName>회원가입</HeadName>
            <InputBox autoComplete={false} name="userId" onChange={HandleChange} />
            <InputBox type="password" name="password" onChange={HandleChange} />
            <InputBox type="password" name="passwordConform" onChange={HandleChange} />
            <InputBox name="nickname" onChange={HandleChange} />
            {error && <ErrorMessage error={error}>{error}</ErrorMessage>}
            <StyledRegisterBtn fullWidth>회원가입</StyledRegisterBtn>
        </StyledRegisterFormWrapper>
    );
};

export default RegisterForm;