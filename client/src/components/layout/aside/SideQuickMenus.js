import React from 'react'
import styled from 'styled-components';
import { IoHome } from "react-icons/io5";
import { myFont } from 'lib/styles/_variable';
import { BsPeopleFill } from "react-icons/bs";
import { GoPencil } from 'react-icons/go'
import { Link } from 'react-router-dom';
/**
**/

const StyledSideQuickMenus = styled.section`
    display: flex;
    position: absolute;
    justify-content: space-around;
    bottom: 2rem;
    padding: 0;
`;
const StyledQuickMenu = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    margin: 0 1rem;
    color: ${({ theme }) => theme.SideBarBg};
    text-decoration: none;
    svg {
        font-size: ${myFont.size.headLarge};
    }
    span {
        padding-top: 0.375rem;
        font-size: ${myFont.size.ms};
    }
    &:hover {
        cursor: pointer;
        svg, span {
            color: ${ ({ theme }) => theme.event.SideBarHoverBg };
        }
    }
`;

const Separator = styled.div`
    width: 1px;
    height: 4rem;
    background: ${ ({ theme }) => theme.SideBarBg };
`;
const SideQuickMenus = () => {
    return (
        <StyledSideQuickMenus>
            <StyledQuickMenu to="/">
                <IoHome/>
                <span>홈</span>
            </StyledQuickMenu>
            <Separator/>
            <StyledQuickMenu to="/">
                <BsPeopleFill/>
                <span>이웃</span>
            </StyledQuickMenu>
            <Separator/>
            <StyledQuickMenu to="/write">
                <GoPencil/>
                <span>글쓰기</span>
            </StyledQuickMenu>
        </StyledSideQuickMenus>
    );
};

export default SideQuickMenus;
