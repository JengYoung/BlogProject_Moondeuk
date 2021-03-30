import React from 'react'
import styled from 'styled-components';
import Input from '../common/input';

/*
*/
const Question = styled.div`
    font-size: 1.2rem;
`;
const RegisterFormBlock = styled.form`
    width: 60%;
    background-color: white;
`;

const RegisterForm = () => {
    return (
        <RegisterFormBlock>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </RegisterFormBlock>
    );
};

export default RegisterForm;