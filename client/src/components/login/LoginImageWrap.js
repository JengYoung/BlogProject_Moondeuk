import React from 'react'
import styled from 'styled-components';

/**
 * * login's right side -> display basic informations.
**/

const StyledLoginImageWrap = styled.div`
    background-image: url("https://moondeuk-images.s3.ap-northeast-2.amazonaws.com/page-background/muhammad-haikal-sjukri--RMBf_xSf2U-unsplash.jpg");
    background-size: cover;
    background-position: center;
    @keyframes transformBrightness {
        0% {
            filter: brightness(20%);
        }
        50% {
            filter: brightness(40%);
            transform: scale(1.01);
        }
        100% {
            filter: brightness(20%);
        }
    }
    animation: transformBrightness 4s ease-in-out infinite;
    @media screen and (min-width:481px){
        width: calc(100vw - 480px); // sideWrap's width: 500px (fixed)
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