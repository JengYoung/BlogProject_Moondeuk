import myMediaQuery from 'lib/styles/_mediaQuery';
import React from 'react'
import styled, { css } from 'styled-components';

/**
**/

const StyledCircleBtn = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    margin-right: 1rem;
    ${({ theme }) => css`
        border: 2px solid ${theme.borderColor};
        color: ${theme.borderColor};
    `}
    background-color: transparent;
    outline: none;
    font-size: 1.5rem;
    * {
        margin: 0;
    }
    &:hover {
        transition: all 0.3s;
        cursor: pointer;
        color: #ffee00;
        border: 2px solid #ffee00;
    }
    ${props => (props.count > 0) && css`
        color:  #ffe600;
        background: #e7a7e7;
        border: none;
    `}
    ${myMediaQuery.mobile} {
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        margin-right: 0.75rem;
        ${({ theme }) => css`
            border: 2px solid ${theme.borderColor};
        `}
    }
`;

const CircleBtn = (props) => {
    return (
        <StyledCircleBtn {...props}>
            
        </StyledCircleBtn>
    );
};

export default CircleBtn;