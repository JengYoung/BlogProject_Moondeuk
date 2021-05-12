import React from 'react'
import styled, { css } from 'styled-components';

/**
**/

const StyledCircleBtn = styled.button`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
    background-color: transparent;
    border: 1px solid lightgray;
    outline: none;
    font-size: 1.5rem;
    border: 1px solid #535353;
    color: #535353;
    * {
        margin: 0;
    }
    &:hover {
        cursor: pointer;
    }
    ${props => (props.count > 0) && css`
        color:  #ffe600;
        background: #e7a7e7;
        border: none;
    `}
    @media screen and (min-width: 481px) {
        width: 3rem;
        height: 3rem;
    }
`;

const CircleBtn = (props) => {
    return (
        <StyledCircleBtn {...props}>
            
        </StyledCircleBtn>
    );
};

export default CircleBtn;