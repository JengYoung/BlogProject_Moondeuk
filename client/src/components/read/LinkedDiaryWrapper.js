import { myFont } from 'lib/styles/_variable';
import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
/**
**/

const StyledLinkedDiaryWrapper = styled.section`
    position: relative;
    /* width: 100%; */
    padding: 2rem 0;
    ${({ theme }) => css`
        background: ${theme.ArticleBg};
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: ${theme.ArticleBorderColor};
    `}
    @media screen and (min-width: 481px) {
        padding: 3rem 15vw;
    }
    @media screen and (min-width: 769px) {
        padding: 3rem 20vw;
    }
`;

const StyledLinkedDiaryWrapperHead = styled.h1`
    font-weight: 500;
    position: relative;
    padding-left: 20px;
    a {
        padding: 0.25rem 1rem;
        border-radius: 1rem;
        line-height: 2;
        text-decoration: none;
        font-size: ${myFont.size.ml};
        font-weight: 700;
        ${({ theme }) => css`
            color: white;
            :hover {
                transition: all 0.3s;
                background: ${theme.event.hoverBg};
                color: ${theme.event.hoverColor};
            }
        `}
    }
`;


const LinkedDiaryWrapper = ({ userId, children, ...rest }) => {
    return (
        <StyledLinkedDiaryWrapper {...rest}>
            <StyledLinkedDiaryWrapperHead>
                <Link to={`/@${userId}`}>
                    { userId } 님의 다른 글
                </Link>
            </StyledLinkedDiaryWrapperHead>
            { children }
        </StyledLinkedDiaryWrapper>
    );
};

export default LinkedDiaryWrapper;