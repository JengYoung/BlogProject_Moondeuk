import React from 'react'
import styled, { css } from 'styled-components';

/**
* * SideWrap: wrap that contains overall side layout
**/

const StyledSideWrap = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100;
    flex-direction: column;
    width: 480px;
    min-height: 100%;
    padding: 0 1rem;

    // dark-mode 여부에 따른 CSS 효과
    background-color: ${({ theme }) => theme.sideBarBg};
    border: ${({ theme }) => theme.borderColor};
    transition: all 0.3s;
    ${props =>
        props.isMain && css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            z-index: 100;
            /* border: 1px solid black; */
            /* background-color: #312330; */
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