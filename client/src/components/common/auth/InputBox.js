import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

/**
 * * composed of... 1. InputTitle 2. Input 3. description
**/

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
`;
const StyledInputTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background-color: #ffe7ff;
`;

const InputBox = (props) => {
    const names = {"id": "ID", "password": "비밀번호", "passwordConform": "비밀번호 확인", "nickname": "닉네임"}
    const postposition = ["id", "password"].includes(props.name) ? "를" : "을"
    return (
        <StyledInputBox>
            <StyledInputTitle>{names[props.name]}{postposition} 입력해주세요.</StyledInputTitle>
            <Input {...props} names={names}></Input>
            {props.name === 'password' && <Input names={names} name="passwordConform"></Input>}
            <Button fullWidth topMargin>확인</Button>
        </StyledInputBox>
    );
};

export default InputBox;