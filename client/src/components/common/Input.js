import React from 'react'
import styled, { css } from 'styled-components';
import names from '../../lib/inputNames';

/*
    일반적으로 본 프로젝트에서 사용할 Input bar 기본 컴포넌트
*/

export const StyledInput = styled.input`
    margin-top: 0.5rem;
    background-color: transparent;
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
    }
    & + & {
        margin-top: 1rem;
    }
    ${props =>
    props.colorWhite && css`
        color: white;
    `}
    ${props =>
    props.BottomMargin && css`
        margin-bottom:1rem;
    `}
`

const Input = (props) => {
    const placeholder = `${names[props.name]}`;
    return (
        <StyledInput {...props} placeholder={placeholder}/>
    );
};

export default Input;