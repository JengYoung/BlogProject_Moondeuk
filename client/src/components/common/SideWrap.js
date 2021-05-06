import React from 'react'
import styled from 'styled-components';

/**
* * SideWrap: wrap that contains overall side layout
**/

const StyledSideWrap = styled.main`
    display: flex;
    flex-direction: column;
    background: yellow;
    width: 500px;
    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        background: skyblue;
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