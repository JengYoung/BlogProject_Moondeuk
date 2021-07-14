import React from 'react'
import styled from 'styled-components';

/**
 * * login's right side -> basic animations
**/


const StyledLoginBackground = styled.article`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background: radial-gradient(#261741 0%, #0a0514 100%);
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Star = styled.div`
    position: absolute;
`;

const LoginBackground = () => {
    const arr = new Array(10).fill(0).map((val, idx) => idx);
    return (
        <StyledLoginBackground>
            {arr.map(star => <Star $shooting-time="4000ms" $yellowColor="rgb(255, 238, 0)" key={star}/>)}
        </StyledLoginBackground>
    );
};

export default LoginBackground;