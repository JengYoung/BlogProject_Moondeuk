import React from 'react'
import styled from 'styled-components';

/*
    일반적으로 본 프로젝트에서 사용할 Input bar 기본 컴포넌트
*/

export const StyledInput = styled.input`
    background-color: transparent;
    color: white;
    font-size: 0.9rem;
    border: none;
    border-bottom: 1px solid lightgray;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    &:focus {
        border-bottom: 1px solid #ffbfff; 
    }
    &::placeholder {
        color: gray;
        font-size: 0.9rem;
        font-style: italic;
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Input = ({type}) => {
    return (
        <StyledInput placeholder={`${type}를 입력하세요.`}/>
    );
};

export default Input;