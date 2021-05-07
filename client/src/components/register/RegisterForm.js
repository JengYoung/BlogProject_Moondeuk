import React from 'react'
import styled from 'styled-components';
import InputBox from '../common/auth/InputBox';
import Button from '../common/Button';
import HeadName from '../common/HeadName';

/*
*/

const StyledRegisterFormWrapper = styled.form`
    width: 400px;
    max-height: 100%;
    padding: 2rem 3rem 2rem 3rem;
    background-color: transparent;
    border: 1px solid lightgray;
    margin-bottom: 3rem;
`;

const StyledErrorMessage = styled.div`
    text-align: center;
    color: red;
    font-weight: 700;
`;

const StyledRegisterBtn = styled(Button)`
    margin-top: 2rem;
`;

const RegisterForm = ({ onChange, onSubmit, error, inputs }) => {
    const QuestionNames = ['userId', 'password', 'nickname']
    return (
        <StyledRegisterFormWrapper onSubmit={onSubmit}>
            <HeadName>회원가입</HeadName>
            {QuestionNames.map(QuestionName => {
                return (
                    <InputBox 
                        name={QuestionName}
                        type={QuestionName === "password" ? "password" : "null"}
                        value={inputs[QuestionName]}
                        onChange={onChange}
                    >
                    </InputBox>
                )
            })}
            {error && <StyledErrorMessage error={error}>{error}</StyledErrorMessage>}
            <StyledRegisterBtn fullWidth>회원가입</StyledRegisterBtn>
        </StyledRegisterFormWrapper>
    );
};

export default RegisterForm;