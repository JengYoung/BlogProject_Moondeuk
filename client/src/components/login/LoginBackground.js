import React from 'react'
import styled from 'styled-components';
import LoginBg from '../../images/LoginBg.jpg'
/*
*/

const StyledLoginBackground = styled.div`
    &::before {
        content:'';
        position: absolute;
        z-index: -99;
        background-image: url(${LoginBg});
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const LoginBackground = ({children}) => {
    return (
        <StyledLoginBackground>
            {children}
        </StyledLoginBackground>
    );
};

export default LoginBackground;