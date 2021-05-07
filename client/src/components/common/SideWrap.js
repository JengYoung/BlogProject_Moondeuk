import React from 'react'
import styled from 'styled-components';

/**
* * SideWrap: wrap that contains overall side layout
**/

const StyledSideWrap = styled.main`
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 480px;
    width: 100%;
    background: white;
    height: auto;
    min-height: 100%;
    @media screen and (min-width: 481px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const SideWrap = (props) => {
    return (
        <StyledSideWrap {...props}>
            
        </StyledSideWrap>
    );
};

export default SideWrap;