import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledHeadName = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: purple;
    padding-bottom: 1rem;
    border-bottom: 1px solid purple;
`;

const HeadName = ({ name }) => {
    return (
        <StyledHeadName>
            { name }
        </StyledHeadName>
    );
};

export default HeadName;