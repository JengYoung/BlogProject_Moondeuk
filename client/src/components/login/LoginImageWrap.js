import React from 'react'
import styled from 'styled-components';

/**
 * * login's right side -> display basic informations.
**/

const StyledLoginImageWrap = styled.div`
    @media screen and (min-width:481px){
        width: calc(100vw - 480px); // sideWrap's width: 500px (fixed)
        background: black;
        height: auto;
    }
    @media (max-width: 480px) {
        display: none;
    }
`;

const LoginImageWrap = (props) => {
    return (
        <StyledLoginImageWrap {...props}>
        </StyledLoginImageWrap>
    );
};

export default LoginImageWrap;