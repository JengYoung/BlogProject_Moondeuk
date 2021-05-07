import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledHeadName = styled.h1`
    font-size: 1.3rem;
    font-weight: 900;
    color: #441444;
    margin-bottom: 1rem;
    display: inline-block;
    padding: 0.3rem;
    background-color: #f5f5f5;
    ${props =>
    props.colorWhite && css`
        color: white;
        border-bottom: transparent;
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