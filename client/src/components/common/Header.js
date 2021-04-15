import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PostDiaryBtnsWrapperContainer from '../../containers/post/write/PostDiaryBtnsWrapperContainer';
import ResponsiveWrapper from './Responsive';

/*
*/

const StyledHeader = styled.div`
    position: fixed;
    z-index: 99;
    width: 100%;
    background: white;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
`;

const Wrapper = styled(ResponsiveWrapper)`
    height: 4rem;
    a {
        padding: 10px;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;


const Header = ({write, user, onLogout}) => {
    console.log('Header Component에서의 user: ', user)
    return (!write) ? (
        <>
            <StyledHeader>
                <Wrapper>
                    <Link to="/" className="logo">MOONDEUK</Link>
                    {user ? (
                        <div>
                            <Link to="/" onClick={onLogout}>로그아웃</Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">로그인</Link>
                        </div>
                    )}
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