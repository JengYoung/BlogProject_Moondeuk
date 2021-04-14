import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledSubscribeInfo = styled.div``;
const StyledGetSubscribeToBtn = styled.button``;
const StyledGetSubscribedFromBtn = styled.button``;
const StyledSubscribeBtn = styled.button``;

const SubscribeInfo = ({userId}) => {
    return (
        <StyledSubscribeInfo>
            <StyledGetSubscribeToBtn>{`${userId}'s`}Following</StyledGetSubscribeToBtn>
            <StyledGetSubscribedFromBtn>{`${userId}'s`}Followed</StyledGetSubscribedFromBtn>
            <StyledSubscribeBtn>구독</StyledSubscribeBtn>
        </StyledSubscribeInfo>
    );
};

export default SubscribeInfo;