import React from 'react'
import styled, { css } from 'styled-components';
import names from '../../../lib/inputNames';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

/**
 * * composed of... 1. InputTitle 2. Input 3. description
**/

const StyledInputBox = styled.div`
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding-bottom: 1rem;
`;
const StyledInputTitle = styled.h2`
    padding-left: 0.5rem;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
`;

const StyledInputTitleBox = styled.section`
    display: flex;
    position: relative;
`;
const InputBox = ({ name, isError, ...rest }) => {
    const errMessage = {
        userId: `아이디는 <strong>한글은 최대 2~8</strong>자,<br/><strong>영어 및 숫자는 최대 4~16자</strong>로 구성되어야 해요!`,
        password: `비밀번호는 <strong>4~24자</strong>로 입력되어야 해요!`,
        passwordConform: `<strong>입력하셨던 비밀번호와 다르거나</strong>,<br/> 비밀번호 길이가 <strong>4~24</strong>자가 아니네요!`,
        nickname: `아이디는 <strong>한글은 최대 1~4</strong>자,<br/>영어, <strong>숫자는 최대 2~8자</strong>로 구성되어야 해요!`
    }
    return (
        <StyledInputBox {...rest}>
            <StyledInputTitleBox>
                <StyledInputTitle>{names[name]}</StyledInputTitle>
                {isError && <ErrorMessage dangerouslySetInnerHTML={{__html: `${errMessage[isError]}`}} isError={isError}></ErrorMessage>}
            </StyledInputTitleBox>
            <Input type={rest.type} names={names} name={name} spellCheck={false} isError={isError}/>
        </StyledInputBox>
    );
};

export default React.memo(InputBox);