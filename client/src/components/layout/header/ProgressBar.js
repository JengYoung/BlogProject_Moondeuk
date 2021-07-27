import React from 'react'
import myMediaQuery from 'lib/styles/_mediaQuery';
import styled, { css } from 'styled-components';

const StyledProgressBar = styled.div`
    position: fixed;
    width: 100%;
    height: 3px;
    z-index: 100;
    top: 12vh;
    ${({ theme, $progressBarWidth }) => css`
        will-change: width;
        background: ${theme.progressBarColor};
        width: ${$progressBarWidth}%;
        transition: all 0.25s; 
    `}
    ${myMediaQuery.tablet} {
        top: 10vh;
    }
    ${myMediaQuery.mobile} {
        top: 8vh;
    }
`
const ProgressBar = (props) => {
    return (
        <StyledProgressBar { ...props }/>
    )
}

export default ProgressBar;