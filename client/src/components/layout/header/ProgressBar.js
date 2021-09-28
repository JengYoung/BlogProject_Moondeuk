import React from 'react'
import myMediaQuery from 'lib/styles/_mediaQuery';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

const StyledProgressBar = styled.div`
    position: fixed;
    width: 100%;
    height: 3px;
    z-index: 60;
    top: 12vh;
    ${({ theme, $progressBarWidth }) => css`
        will-change: width;
        background: ${theme.progressBarColor};
        width: ${$progressBarWidth}%;
        transition: all 0.5s; 
    `}
    ${myMediaQuery.tablet} {
        top: 10vh;
    }
    ${myMediaQuery.mobile} {
        top: 8vh;
    }
`
const ProgressBar = () => {
    const { progressBarWidth } = useSelector(({ utilReducer }) => ({
        progressBarWidth: utilReducer.progressBarWidth,
    }));
    return (
        <StyledProgressBar $progressBarWidth={progressBarWidth}/>
    )
}

export default React.memo(ProgressBar);