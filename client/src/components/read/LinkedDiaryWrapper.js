import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/**
**/

const StyledLinkedDiaryWrapper = styled.section`
    position: relative;
    /* width: 100%; */
    padding: 2rem 0;
    background: #f6f4f7;
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
    font-size: 0.9rem;
    * {
        font-weight: 700;
        :hover {
            color: #cf9de5;
        }
    }
`;


const LinkedDiaryWrapper = ({ userId, children, ...props }) => {
    return (
        <StyledLinkedDiaryWrapper {...props}>
            <StyledLinkedDiaryWrapperHead><Link to={`/@${userId}`}>{ userId } 님의 다른 글</Link></StyledLinkedDiaryWrapperHead>
            { children }
        </StyledLinkedDiaryWrapper>
    );
};

export default LinkedDiaryWrapper;