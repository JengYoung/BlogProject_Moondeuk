import React from 'react'
import styled, { css } from 'styled-components';

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
    ${props =>
        props.isMain && css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            z-index: 100;
            border: 1px solid black;
            background-color: #312330;
        `
    }
    ${props => 
        (props.isSideBar === false) && css`
            display: none;
            min-width: 0vw;
            max-width: 0vw;
            overflow: hidden;
        ` 
    }
`;

const SideWrap = (props) => {
    return (
        <StyledSideWrap {...props}>
            
        </StyledSideWrap>
    );
};

export default SideWrap;