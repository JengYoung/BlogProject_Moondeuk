import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import imglogo from '../../images/moondeuk-imglogo.png';
import logo from '../../images/moondeuk-logo.png';

/**
 * * 문득 이미지 로고 & 문자 로고
**/

const StyledImglogo = styled.img`
    width: 25px;
    height: 25px;
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
                display: block;
            }
            @media screen and (min-width: 769px) {
                width: 50px;
                height: 50px;
                display: inline-block;
            }
        `
    }
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
        margin-top: 0.5rem;
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
                <StyledImglogo isHeader={props.isHeader} src={imglogo} alt="moondeuk image logo"></StyledImglogo>
            </Link>
            <Link to="/">
                <StyledLogo isHeader={props.isHeader} src={logo} alt="moondeuk logo"></StyledLogo>
            </Link>
        </StyledLogoWrap>
    );
};

export default LogoWrap;