import React from 'react'
import styled, { css } from 'styled-components';

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

const ShootingStarWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotateZ(45deg);
`;

const _getShining = (isBefore=false) => css`
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), ${({ $yellow }) => $yellow }, rgba(0, 0, 255, 0));
    ${isBefore ? 
        "transform: translateX(50%) rotateZ(45deg);" : 
        "transform: translateX(50%) rotateZ(-45deg);" 
    }
    animation: shining ${({ $shootingTime }) => $shootingTime } ease-in-out infinite;

    @keyframes shining {
        0% {
            width: 0;
        }
        100% {
            width: 1.25rem;
        }
    }
`;
const _setStars = ({ $idx, $top, $left, $delay }) => css`
    &:nth-child(${$idx}) {
        will-change: top, left, animation-delay;
        top: ${$top}%;
        left: ${$left}%;
        animation-delay: ${$delay}ms;
        &::before,
        &::after {
            will-change: animation-delay;
            animation-delay: ${$delay}ms;
        }
    }
`;
const Star = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #666, rgba(0, 0, 255, 0));
    filter: drop-shadow(0 0 10px #fff566);
    animation: tail 4000ms ease-in-out infinite, shooting 4000ms ease-in-out infinite;
    &::before {
        ${_getShining(true)}
    }
    &::after {
        ${_getShining()}
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
    ${({ $idx, $top, $left, $delay }) =>  _setStars({ $idx, $top, $left, $delay})}
`;

const LoginBackground = () => {
    const arr = new Array(5).fill(0).map((val, idx) => idx + 1);
    return (
        <StyledLoginBackground>
            <ShootingStarWrapper>
                {   
                    arr.map(star => 
                            <Star
                                $top={Math.random() * 100}
                                $left={Math.random() * 100}
                                $shootingTime="4000ms" 
                                $yellow="rgb(255, 238, 0)" 
                                $delay={Math.random() * 10000}
                                $idx={star}
                                key={star}
                            />)
                }
            </ShootingStarWrapper>
        </StyledLoginBackground>
    );
};

export default LoginBackground;