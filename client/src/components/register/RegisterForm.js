import React from 'react'
import styled from 'styled-components';
import registerReducer from '../../modules/register';
import Button from '../common/Button';
import HeadName from '../common/HeadName';
import Input from '../common/Input';

/*
*/

const StyledQuestion = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: #9e0997;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
`;
const StyledRegisterFormWrapper = styled.form`
    width: 400px;
    max-height: 100%;
    padding: 2rem 3rem 2rem 3rem;
    border-radius: 10px;
    background-color: white;
`;

const StyledErrorMessage = styled.div`
    text-align: center;
    color: red;
    font-weight: 700;
`;

const RegisterForm = ({ onChange, onSubmit, error }) => {
    const QuestionNames = ['userId', 'password', 'passwordConform', 'nickname', 'birthday']
    return (
        <StyledRegisterFormWrapper onSubmit={onSubmit}>
            <HeadName name="회원가입"></HeadName>
        {QuestionNames.map(QuestionName => {
            return (
                <>
                    <StyledQuestion>{QuestionName}</StyledQuestion>
                    <Input 
                        BottomMargin 
                        type={QuestionName.indexOf('비밀번호') !== -1 ? "password" : null}
                        name={QuestionName}
                        value={registerReducer[QuestionName]} 
                        onChange={onChange}
                    />
                </>
            )
        })}
        {error && <StyledErrorMessage error={error}>{error}</StyledErrorMessage>}
        <Button fullWidth name="회원가입" />
    </StyledRegisterFormWrapper>
    );
};

export default RegisterForm;