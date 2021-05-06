import React from 'react'
import styled from 'styled-components';

/**
 * * login's right side -> display basic informations.
**/

const StyledLoginImageWrap = styled.div`
    width: calc(100vw - 500px); // sideWrap's width: 500px (fixed)
    background: black;
    height: auto;
    @media (max-width: 500px) {
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