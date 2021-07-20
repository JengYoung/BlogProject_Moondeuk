import LinkBtn from 'components/common/LinkBtn';
import React from 'react'
import styled from 'styled-components';

/**
**/

const StyledSideBtnLinks = styled.div`
    display: flex;
    margin-top: 1rem; 
    a {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
`;

const SideBtnLinks = () => {
    return (
        <StyledSideBtnLinks>
            <LinkBtn>정보 수정</LinkBtn>
            <LinkBtn>내 일기장</LinkBtn>
        </StyledSideBtnLinks>
    );
};

export default SideBtnLinks;