import React from 'react';
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
    ${({ theme }) => css`
        color: ${theme.buttonBg};
        border: 1px solid ${theme.borderColor};
        &:hover {
            border: ${theme.event.hoverBg};
            background-color: ${theme.event.hoverBg};
            color: ${theme.event.buttonHoverColor};
        }
    `};
    border-radius: 1rem;
    transition: all 0.7s;
    font-weight: 700;
    outline: none;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    ${props => 
        props.fullWidth && css`
        width: 100%;
        height: 3rem;
        font-size: 1.0625rem;
        border-radius: 3rem;
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