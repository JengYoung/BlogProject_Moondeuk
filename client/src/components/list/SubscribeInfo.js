import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledSubscribeInfo = styled.div``;
const StyledGetSubscribeToBtn = styled.button``;
const StyledGetSubscribedFromBtn = styled.button``;
const StyledSubscribeBtn = styled.button``;

const SubscribeInfo = ({userId, onSubscribe, subscribe}) => {
    console.log("너에게 닿기를, ", subscribe, subscribe)
    return (
        <StyledSubscribeInfo>
            <StyledGetSubscribeToBtn>{`${userId}'s`}Following</StyledGetSubscribeToBtn>
            <StyledGetSubscribedFromBtn>{`${userId}'s`}Followed</StyledGetSubscribedFromBtn>
            <StyledSubscribeBtn onClick={onSubscribe}>{(subscribe && subscribe) ? "구독 중" : "구독"}</StyledSubscribeBtn>
        </StyledSubscribeInfo>
    );
};

export default SubscribeInfo;