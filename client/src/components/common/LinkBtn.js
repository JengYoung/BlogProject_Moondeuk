import { myFont } from 'lib/styles/_variable';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
**/

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    /* height: 2rem; */
    line-height: 2.25;
    margin-top: 1rem;
    font-size: ${myFont.size.s};
    font-weight: 700;
    border-radius: 2rem;
    border: ${({ theme }) => `1px solid ${theme.borderColor}`};
    background: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.borderColor};
    text-decoration: none;
    transition: all 0.3s;
    &:hover {
        background: ${({ theme }) => theme.event.hoverBg};
        color: ${({ theme }) => theme.event.buttonHoverColor};
        border: ${({ theme }) => `1px solid ${theme.event.hoverBg}`};
    } 
`;

const LinkBtn = ({ children, ...props }) => {
    return (
        <StyledLink { ...props }>
            { children }
        </StyledLink>
    );
};

export default LinkBtn;