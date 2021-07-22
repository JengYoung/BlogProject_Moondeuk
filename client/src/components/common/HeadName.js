import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledHeadName = styled.header`
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: inline-block;
    padding: 0.3rem;
    /* background-color: #f5f5f5; */
    ${props =>
    props.colorWhite && css`
        color: white;
        border-bottom: transparent;
    `}
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
`;

const HeadName = (props) => {
    return (
        <StyledHeadName {...props}>
            { props.children }
        </StyledHeadName>
    );
};

export default HeadName;