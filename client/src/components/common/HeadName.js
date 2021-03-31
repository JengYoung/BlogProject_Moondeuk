import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledHeadName = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: purple;
    padding-bottom: 1rem;
    border-bottom: 1px solid purple;
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