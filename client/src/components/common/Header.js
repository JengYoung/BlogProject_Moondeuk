import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AlertBtnContainer from '../../containers/alert/AlertBtnContainer';
import PostDiaryBtnsWrapperContainer from '../../containers/post/write/PostDiaryBtnsWrapperContainer';
import LogoWrap from './LogoWrap';
// import ResponsiveWrapper from './Responsive';

/*
*/

const StyledHeader = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    background: white;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
`;

// const Wrapper = styled(ResponsiveWrapper)`
//     display: flex;
//     justify-content: space-between;
//     height: 4rem;
//     a {
//         padding: 10px;
//     }
// `;

const Wrapper = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //* 481px - small device (smartphone ~ Tablet)
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const StyledAlertWrapper = styled.div`
    position: relative;
    display: flex;
    /* width: 100%; */
    align-items: center;
    button + div {
        padding-left: 1rem;
    }
`;

const LoginLink = styled(Link)`
    position: relative;
    right: 20px;
    padding: 0.5vh 1vh;
    border-radius: 7px;
    font-size: 0.8rem;
    &:hover {
        background-color: #421642;
        color: white;
        transition: all 0.7s;
    }
`;

const Header = ({write, user, onLogout}) => {
    return (!write) ? (
        <>
            <StyledHeader>
                <Wrapper>
                    <LogoWrap isHeader></LogoWrap>
                    <StyledAlertWrapper>
                        {user ? (
                            <>
                                <AlertBtnContainer></AlertBtnContainer>
                                <>
                                    <div>{user.userId}</div>
                                    <LoginLink to="/" onClick={onLogout}>로그아웃</LoginLink>
                                </>
                            </>
                        ) : (
                            <>
                                <LoginLink to="/login">로그인</LoginLink>
                            </>
                        )}
                    </StyledAlertWrapper>
                </Wrapper>
            </StyledHeader>
            <Spacer/>
        </>
    ) : (
        <>
            <StyledHeader>
                <Wrapper>
                    <Link to="/" className="logo">MOONDEUK</Link>
                    <PostDiaryBtnsWrapperContainer/>
                </Wrapper>
            </StyledHeader>
            <Spacer/>
        </>
    )
};

export default Header;