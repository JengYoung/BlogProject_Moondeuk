import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledHeadName = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: #441444;
    padding-bottom: 1rem;
    text-align:center;
    ${props =>
    props.colorWhite && css`
        color: white;
        border-bottom: transparent;
    `}
`;

const HeadName = (props) => {
    return (
        <StyledHeadName {...props}>
            { props.name }
        </StyledHeadName>
    );
};

export default HeadName;