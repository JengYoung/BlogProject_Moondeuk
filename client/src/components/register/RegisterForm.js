import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

/*
*/

const StyledQuestion = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: #9e0997;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
`;
const StyledRegisterFormWrapper = styled.form`
    width: 60%;
    padding: 4rem 3rem;
    border-radius: 10px;
    background-color: white;
`;

const RegisterForm = () => {
    const QuestionNames = ['아이디', '비밀번호', '비밀번호 확인', '이름', '닉네임', '이메일', '전화번호']
    return (
        <StyledRegisterFormWrapper>
        {QuestionNames.map(QuestionName => {
            return (
                <>
                    <StyledQuestion>{QuestionName}</StyledQuestion>
                    <Input BottomMargin type={QuestionName === '비밀번호 확인' ? '비밀번호' : QuestionName} />
                </>
            )
        })}
        <Button fullWidth type="회원가입 요청" />
    </StyledRegisterFormWrapper>
    );
};

export default RegisterForm;