import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import AlertBtnContainer from '../../containers/alert/AlertBtnContainer';
import PostDiaryBtnsWrapperContainer from '../../containers/post/write/PostDiaryBtnsWrapperContainer';
import LogoWrap from './LogoWrap';
import { GrMenu } from 'react-icons/gr';
import UserImageBox from './UserImageBox';
import AlertList from '../alert/AlertList';
import { useCallback } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai'

const MenuWrap = styled.div`
    display: flex;
    position: relative;
    left: 1rem;
    align-items: center;
    width: 80%;
`;

const SideWrapBtn = styled.button`
    display: flex;
    position: relative;
    z-index: 99;
    flex-direction: column;
    align-items: center;
    background: transparent;
    outline: none;
    border: none;
    width: 2rem;
    margin-right: 2vw;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
    }
    @media screen and (min-width: 461px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 769px) {
        font-size: 2rem;
    }
`;

const StyledHeader = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    background: white;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
`;

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
    height: 8vh;
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
`;

const StyledAlertWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
`;

const UserInfoBox = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    right: 6vw;
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
    button + label {
        margin-left: 0.5vw;
    }
`;
const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    @media screen and (min-width: 481px) {
        display: flex;
        font-size: 1rem;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
`;

const HeaderOptionBtn = styled.div`
    transition: all 0.5s ease;
    font-size: 2rem;
    &:hover { 
        cursor: pointer;
    }
    ${props => {
        return props.openLogout && css`
            position: relative;
            color: red;
            transform: rotate(90deg);
        `
    }}
`;
const LoginLink = styled(Link)`
    min-width: 4rem;
    padding: 0.5vh 1vh;
    border-radius: 7px;
    &:hover {
        background-color: #421642;
        color: white;
        transition: all 0.7s;
    }
`;

const AlertBox = styled.div`
    display: block;
    position: relative;
    @media screen and (min-width: 481px) {
        display: flex;
        justify-content: center;
    }
`;

const Header = ({write, user, onLogout, checkUser, onSideBar, alerts, onConform }) => {
    const user_id = user ? user._id : null;
    const userImage = user ? user.userImage : null;
    const [ openAlertList, setOpenAlertList ] = useState(false);
    const [ openLogout, setopenLogout ] = useState(false);
    const onOpenAlertList = useCallback(() => setOpenAlertList(!openAlertList), [openAlertList]);
    const onOpenLogout = useCallback(() => {
            console.log("여기", openLogout); 
            setopenLogout(!openLogout); 
            console.log("바뀌고 난 후 ", openLogout);
    }, [openLogout]);
    return (!write) ? (
        <>
            <StyledHeader>
                <Wrapper>
                    <MenuWrap>
                        <SideWrapBtn onClick={onSideBar}><GrMenu/></SideWrapBtn>
                        <LogoWrap isHeader></LogoWrap>
                    </MenuWrap>
                    <StyledAlertWrapper>
                        {user ? (
                            <UserInfoBox>
                                <AlertBox>
                                    <AlertBtnContainer onOpenAlertList={onOpenAlertList}></AlertBtnContainer>
                                    {openAlertList && <AlertList alerts={alerts} onConform={onConform}/>}
                                </AlertBox>
                                <UserImageBox 
                                    user_id={user_id} 
                                    user_image={userImage} 
                                    isHeader 
                                    checkUser={checkUser}
                                />
                                <UserInfo>
                                    {openLogout && <div>{user.userId}</div>}
                                    {!openLogout && <LoginLink to="/" onClick={onLogout}>로그아웃</LoginLink>}
                                    <HeaderOptionBtn openLogout={openLogout} onClick={onOpenLogout}>
                                        <AiOutlineEllipsis/>
                                    </HeaderOptionBtn>
                                </UserInfo>
                            </UserInfoBox>
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