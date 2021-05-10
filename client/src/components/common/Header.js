import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AlertBtnContainer from '../../containers/alert/AlertBtnContainer';
import PostDiaryBtnsWrapperContainer from '../../containers/post/write/PostDiaryBtnsWrapperContainer';
import LogoWrap from './LogoWrap';
import { GrMenu } from 'react-icons/gr';
import userImgUploadAPI from '../../lib/routes/upload/userImgUpload';

const MenuWrap = styled.div`
    display: flex;
    position: relative;
    left: 1rem;
    align-items: center;
    width: 80%auto;
`;

const SideWrapBtn = styled.button`
    display: flex;
    /* position: relative; */
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
    /* width: 100%; */
    align-items: center;
    button + div {
        padding-left: 1rem;
    }
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
`;
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.8rem;
    @media screen and (min-width: 481px) {
        display: flex;
        font-size: 1rem;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
`;

const LoginLink = styled(Link)`
    padding: 0.5vh 1vh;
    border-radius: 7px;
    &:hover {
        background-color: #421642;
        color: white;
        transition: all 0.7s;
    }
`;
const UserImageInput= styled.input`
    /* display:none; */
`;
const UserImageLabel = styled.label`
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 50px;
    &:hover {
        cursor: pointer;
    }
`;

const Header = ({write, user, onLogout}) => {
    const onChange = (e) => {
        const user_id = user ? user._id : null;
        console.log(user_id)
        const imgFiles = e.target.files
        console.log("onChange", imgFiles);
        userImgUploadAPI(user_id, imgFiles)
    }
    return (!write) ? (
        <>
            <StyledHeader>
                <Wrapper>
                    <MenuWrap>
                        <SideWrapBtn><GrMenu/></SideWrapBtn>
                        <LogoWrap isHeader></LogoWrap>
                    </MenuWrap>
                    <StyledAlertWrapper>
                        {user ? (
                            <UserInfoBox>
                                <AlertBtnContainer></AlertBtnContainer>
                                <UserInfo>
                                    <UserImageInput 
                                        id="please"
                                        type="file" 
                                        accept="image/jpeg, image/jpg, image/png" 
                                        enctype="multipart/form-data"
                                        onChange={onChange}
                                    />
                                    <UserImageLabel htmlFor="please">
                                        <img src="../../images/LoginBg.jpg" alt="유저 프로필 이미지"></img>
                                    </UserImageLabel>
                                    <div>{user.userId}</div>
                                    <LoginLink to="/" onClick={onLogout}>로그아웃</LoginLink>
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