import React from 'react'
import styled from 'styled-components';

/**
* * SideWrap: wrap that contains overall side layout
**/

const StyledSideWrap = styled.main`
    display: flex;
    flex-direction: column;
    width: 500px;
    background: white;
    height: auto;
    min-height: 100%;
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 501px) {
    }
`;

const SideWrap = (props) => {
    return (
        <StyledSideWrap {...props}>
            
        </StyledSideWrap>
    );
};

export default SideWrap;