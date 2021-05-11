import React from 'react'
import styled, { css } from 'styled-components';
import { AiOutlineLine } from "react-icons/ai";

/**
**/

const StyledExitSideMenuBtnBox = styled.button`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 1rem;
    top: 0;
    width: 3rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
    fill: white;
    svg {
        transition: all 0.5s ease;
        fill: white;
        &:first-child {
            position: relative;
            top: 0.5rem;
        }
        &:last-child {
            position: relative;
            top: 0.1rem;
        }
    }
    &:hover {
        cursor: pointer;
    }
    @media screen and (min-width: 461px) {
        font-size: 1.5rem;        
        svg {
            fill: white;
            &:first-child {
                position: relative;
                top: 0.7rem;
            }
            &:last-child {
                position: relative;
                top: 0.2rem;
            }
        }
    }
    @media screen and (min-width: 769px) {
        left: 0.5rem;
        font-size: 2rem;
        svg {
            fill: white;
            &:first-child {
                position: relative;
                top: 0.7rem;
            }
            &:last-child {
                position: relative;
                top: 0;
            }
        }
    }
    ${props =>
        props.isSideBar && css`
            svg {
                &:first-child {
                    position: relative;
                    transform-origin: 0% 50%;
                    transform: rotate(45deg);
                }
                &:last-child {
                    position: relative;
                    transform-origin: 5% 50%;
                    transform: rotate(-45deg);
                }
            }
        `
    }
`;


const SideMenuBtn = ({ isSideBar, onSideBar }) => {
    return (
        <StyledExitSideMenuBtnBox isSideBar={isSideBar} onClick={onSideBar}>
            <AiOutlineLine></AiOutlineLine>
            <AiOutlineLine></AiOutlineLine> 
        </StyledExitSideMenuBtnBox>
    );
};

export default SideMenuBtn;