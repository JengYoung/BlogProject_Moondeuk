import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ResponsiveWrapper from './Responsive';

/*
*/

const StyledHeader = styled.div`
    position: fixed;
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


const Header = () => {
    return (
        <>
            <StyledHeader>
                <Wrapper>
                    <div className="logo">MOONDEUK</div>
                    <Link>로그인</Link>
                    <Link>로그아웃</Link>
                </Wrapper>
            </StyledHeader>
            <Spacer/>
        </>
    );
};

export default Header;