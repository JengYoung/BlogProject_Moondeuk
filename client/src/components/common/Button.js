import React from 'react'
import styled, { css } from 'styled-components';

/*
    버튼 공통 컴포넌트
*/

const ButtonCSS = css`
    padding: 0.5rem 0.75rem;
    background-color: rgba(168, 6, 168, 0.5);
    color: white;
    font-weight: 800;
    font-size: 1rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transition: all 0.7s;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
        background-color: rgba(168, 6, 168, 1);
        transform: scale(1.05);
        color: yellow;
    }
    ${props => 
        props.fullWidth && css`
        width: 100%;
        height: 3rem;
    `}
`;
const StyledButton = styled.button`
    ${ButtonCSS}
`;

const Button = (props) => {
    const { name } = props;
    return (
        <StyledButton {...props}>
            {name}
        </StyledButton>
    );
};

export default Button;