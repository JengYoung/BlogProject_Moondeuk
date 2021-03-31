import React from 'react'
import styled from 'styled-components';
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

const RegisterForm = () => {
    const QuestionNames = ['아이디', '비밀번호', '비밀번호 확인', '닉네임', '이름', '생년월일']
    return (
        <StyledRegisterFormWrapper>
            <HeadName theme="회원가입"></HeadName>
        {QuestionNames.map(QuestionName => {
            return (
                <>
                    <StyledQuestion>{QuestionName}</StyledQuestion>
                    <Input BottomMargin type={QuestionName === '비밀번호 확인' ? '비밀번호' : QuestionName} />
                </>
            )
        })}
        <Button fullWidth type="회원가입" />
    </StyledRegisterFormWrapper>
    );
};

export default RegisterForm;