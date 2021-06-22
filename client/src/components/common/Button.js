import React from 'react'
import styled, { css } from 'styled-components';

/*
    버튼 공통 컴포넌트
*/

const ButtonCSS = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    border: 1px solid rgb(173, 122, 173);
    border-radius: 1rem;
    transition: all 0.7s;
    color: rgb(173, 122, 173);
    font-weight: 800;
    outline: none;
    &:hover {
        cursor: pointer;
        background-color: rgb(134, 70, 134);
        transform: scale(1.05);
        color: #fbff00;
    }
    ${props => 
        props.fullWidth && css`
        width: 100%;
        height: 3rem;
    `}
    ${props => 
        props.topMargin && css`
            margin-top: 1.5rem;
        `
    }
`;
const StyledButton = styled.button`
    ${ButtonCSS}
`;

const Button = (props) => {
    const { children } = props;
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;