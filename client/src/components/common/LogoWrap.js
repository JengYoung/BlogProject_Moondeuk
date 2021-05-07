import React from 'react'
import styled, { css } from 'styled-components';
import imglogo from '../../images/moondeuk-imglogo.png';
import logo from '../../images/moondeuk-logo.png';

/**
 * * 문득 이미지 로고 & 문자 로고
**/

const StyledImglogo = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${imglogo});
    background-size: contain;
`;
const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: none;
    
`;
const StyledLogoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    // * if register page => position wrap's top
    ${props =>
        props.register && css`
            width: 500px;
            padding-bottom: 4rem;
        `
    }
`;

const LogoWrap = (props) => {
    return (
        <StyledLogoWrap {...props}>
            <StyledImglogo></StyledImglogo>
            <StyledLogo></StyledLogo>
        </StyledLogoWrap>
    );
};

export default LogoWrap;