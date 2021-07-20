import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import imgDarkLogo from '../../images/moondeuk-imglogo.png';
import imgLightLogo from '../../images/밝은 로고.png';
import darkLogo from '../../images/moondeuk-logo.png';
import lightLogo from '../../images/문득 밝은 로고.png';

/**
 * * 문득 이미지 로고 & 문자 로고
**/

const setTheme = css`
    ${({ isDarkTheme, theme }) => {
        /*
            현재 테마와 isDark의 값이 반대일 때에만 display: none 적용
        */ 
        if (isDarkTheme && theme.now === 'light') return css`
            display: none;
        `
        if (!isDarkTheme && theme.now === 'dark') return css`
            display: none;
        `
    }}
`

const StyledImglogo = styled.img`
    width: 34px;
    height: 34px;
    @media screen and (min-width: 481px) {
        width: 50px;
        height: 50px;
    }
    ${props =>
        props.isHeader && css`
            display: block;
            @media screen and (min-width: 481px) {
                width: 35px;
                height: 35px;
                /* display: block; */
            }
            @media screen and (min-width: 769px) {
                width: 50px;
                height: 50px;
                /* display: inline-block; */
            }
        `
    }
    ${setTheme};
`;
const StyledLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99px;
    height: 33px;
    ${props =>
        props.isHeader && css`
            @media screen and (max-width: 480px) {
                display: none;
            }
        `
    }
    @media screen and (min-width: 481px) {
        width: 150px;
        height: 50px;
    }

    ${setTheme};
`;
const StyledLogoWrap = styled.div`
    display: flex;
    align-items: center;
    // * if register page => position wrap's top
    ${props =>
        props.register && css`
            margin-top: 2rem;
            justify-content: center;
            width: 100%;
            padding-bottom: 2rem;
        `
    }
    @media screen and (min-width: 469px) {
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        ${props =>
            props.isHeader && css`
                flex-direction: row;
                padding: 0;
            `
        }
    }
`;

const LogoWrap = (props) => {
    return (
        <StyledLogoWrap {...props}>
            <Link to="/">
                <StyledImglogo isHeader={props.isHeader} src={imgDarkLogo} alt="moondeuk image dark logo" />
                <StyledImglogo isHeader={props.isHeader} src={imgLightLogo} alt="moondeuk image light logo" isDarkTheme/>
            </Link>
            <Link to="/">
                <StyledLogo isHeader={props.isHeader} src={darkLogo} alt="moondeuk dark logo" />
                <StyledLogo isHeader={props.isHeader} src={lightLogo} alt="moondeuk light logo" isDarkTheme/>
            </Link>
        </StyledLogoWrap>
    );
};

export default React.memo(LogoWrap);