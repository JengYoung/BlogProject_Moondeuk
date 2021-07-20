/*
    SideBar, Modal에서 가운데로 로그인 해달라는 메시지 출력
*/ 

import React from 'react'
import styled from 'styled-components';
import { myFont } from '../../lib/styles/_variable'
import LinkBtn from './LinkBtn';
/**
**/

const StyledLoginMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-size: ${myFont.size.l};
`;

const StyledLoginAnimation = styled.img`
    max-width: 60%;
    margin-bottom: 3rem;
`;
const LoginMessage = (props) => {
    return (
        <StyledLoginMessage {...props}>
            <StyledLoginAnimation src="https://3.bp.blogspot.com/-95lngfeZfYs/WuuTY199EOI/AAAAAAAAAzY/axaQ3eGzc1ciiK-aWcJEAyHdfHMnhYLkwCLcBGAs/s1600/original.gif" alt="animation gif" />
            <span>로그인 후 이용해주세요! 😉🤟🏻</span>
            <LinkBtn to="/login">로그인 화면으로 이동</LinkBtn>
        </StyledLoginMessage>
    );
};

export default LoginMessage;