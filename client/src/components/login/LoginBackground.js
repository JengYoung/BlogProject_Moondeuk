import React from 'react'
import styled from 'styled-components';

/**
 * * login's right side -> basic animations
**/


const StyledLoginBackground = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(#261741 0%, #0a0514 100%);
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
const LightThemeWrapper = styled.img`
    width: 100%;
    height: 100%;
    opacity: 1;
    ${({ theme }) => (theme === 'dark') && `
        display: none;
        opacity: 0;
    `}
    transition: opacity 0.5s;
`
const DarkThemeWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotateZ(45deg);
    ${({ theme }) => (theme === 'light') && 'display: none;'}
`;

const Star = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #666, rgba(0, 0, 255, 0));
    filter: drop-shadow(0 0 10px #fff566);
    animation: tail 4000ms ease-in-out infinite, shooting 4000ms ease-in-out infinite;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        right: 0;
        height: 2px;
        background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #fe0, rgba(0, 0, 255, 0));
        animation: shining 4000ms ease-in-out infinite;
    }
    &::before {
        transform: translateX(50%) rotateZ(45deg);
    }
    &::after {
        transform: translateX(50%) rotateZ(-45deg);
    }
    &:nth-child(1) {
        top: calc((23%));
        left: calc((35%));
        animation-delay: 8977ms;
    }
    &:nth-child(1)::before, &:nth-child(1)::after {
        animation-delay: 8977ms;
    }
    &:nth-child(2) {
        top: calc((70%));
        left: calc((42%));
        animation-delay: 5583ms;
    }
    &:nth-child(2)::before, &:nth-child(2)::after {
        animation-delay: 5583ms;
    }
    &:nth-child(3) {
        top: calc((74%));
        left: calc((83%));
        animation-delay: 6271ms;
    }
    &:nth-child(3)::before, &:nth-child(3)::after {
        animation-delay: 6271ms;
    }
    &:nth-child(4) {
        top: calc((5%));
        left: calc((3%));
        animation-delay: 8727ms;
    }
    &:nth-child(4)::before, &:nth-child(4)::after {
        animation-delay: 8727ms;
    }
    &:nth-child(5) {
        top: calc((77%));
        left: calc((40%));
        animation-delay: 4799ms;
    }
    &:nth-child(5)::before, &:nth-child(5)::after {
        animation-delay: 4799ms;
    }
    &:nth-child(6) {
        top: calc((56%));
        left: calc((61%));
        animation-delay: 2090ms;
    }
    &:nth-child(6)::before, &:nth-child(6)::after {
        animation-delay: 2090ms;
    }
    &:nth-child(7) {
        top: calc((99%));
        left: calc((49%));
        animation-delay: 3970ms;
    }
    &:nth-child(7)::before, &:nth-child(7)::after {
        animation-delay: 3970ms;
    }
    &:nth-child(8) {
        top: calc((50%));
        left: calc((10%));
        animation-delay: 7289ms;
    }
    &:nth-child(8)::before, &:nth-child(8)::after {
        animation-delay: 7289ms;
    }
    &:nth-child(9) {
        top: calc((8%));
        left: calc((14%));
        animation-delay: 8890ms;
    }
    &:nth-child(9)::before, &:nth-child(9)::after {
        animation-delay: 8890ms;
    }
    &:nth-child(10) {
        top: calc((22%));
        left: calc((54%));
        animation-delay: 4447ms;
    }
    &:nth-child(10)::before, &:nth-child(10)::after {
        animation-delay: 4447ms;
    }
    @keyframes tail {
        0% {
            width: 0;
        }
        30% {
            width: 100px;
        }
        100% {
            width: 0;
        }
    }
    @keyframes shining {
        0% {
            width: 0;
        }
        50% {
            width: 1.25rem;
        }
        100% {
            width: 0;
        }
    }
    @keyframes shooting {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(300px);
        }
    }
    @keyframes sky {
        0% {
            transform: rotate(45deg);
        }
        100% {
            transform: rotate(405deg);
        }
    }
`;

/*
    전체 위치 랜덤으로 만든 애니메이션
*/ 

// const _getShining = (isBefore=false) => css`
//     content: '';
//     position: absolute;
//     top: calc(50% - 1px);
//     right: 0;
//     height: 2px;
//     background: linear-gradient(-45deg, rgba(0, 0, 255, 0), ${({ $yellow }) => $yellow }, rgba(0, 0, 255, 0));
//     ${isBefore ? 
//         "transform: translateX(50%) rotateZ(45deg);" : 
//         "transform: translateX(50%) rotateZ(-45deg);" 
//     }
//     animation: shining ${({ $shootingTime }) => $shootingTime } ease-in-out infinite;

//     @keyframes shining {
//         0% {
//             width: 0;
//         }
//         100% {
//             width: 1.25rem;
//         }
//     }
// `;
// const _setStars = ({ $idx, $top, $left, $delay }) => css`
//     &:nth-child(${$idx}) {
//         will-change: top, left, animation-delay;
//         top: ${$top}%;
//         left: ${$left}%;
//         animation-delay: ${$delay}ms;
//         &::before,
//         &::after {
//             will-change: animation-delay;
//             animation-delay: ${$delay}ms;
//         }
//     }
// `;
// const Star = styled.div`
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     height: 2px;
//     background: linear-gradient(-45deg, #666, rgba(0, 0, 255, 0));
//     filter: drop-shadow(0 0 10px #fff566);
//     animation: tail 4000ms ease-in-out infinite, shooting 4000ms ease-in-out infinite;
//     &::before {
//         ${_getShining(true)}
//     }
//     &::after {
//         ${_getShining()}
//     }
//     @keyframes tail {
//         0% {
//             width: 0;
//         }
//         30% {
//             width: 100px;
//         }
//         100% {
//             width: 0;
//         }
//     }
//     @keyframes shooting {
//         0% {
//             transform: translateX(0);
//         }
//         100% {
//             transform: translateX(300px);
//         }
//     }
//     @keyframes sky {
//         0% {
//             transform: rotate(45deg);
//         }
//         100% {
//             transform: rotate(405deg);
//         }
//     }
//     ${({ $idx, $top, $left, $delay }) =>  _setStars({ $idx, $top, $left, $delay})}
// `;

const LoginBackground = ({ theme }) => {
    const arr = new Array(10).fill(0).map((val, idx) => idx + 1);
    console.log(theme);
    return (
        <>    
            <StyledLoginBackground>
                <LightThemeWrapper src="https://images.velog.io/images/young_pallete/post/0930ffad-697a-45b7-8ded-f0e25f5fc90b/df.gif" alt="moondeuk login light" theme={theme}></LightThemeWrapper>    
                <DarkThemeWrapper theme={theme}>
                    {   
                        arr.map(star => 
                                <Star key={star}/>)
                    }
                </DarkThemeWrapper>
            </StyledLoginBackground>
        </>
    );
};

export default React.memo(LoginBackground);