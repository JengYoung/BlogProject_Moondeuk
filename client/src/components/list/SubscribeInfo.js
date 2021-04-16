import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledSubscribeInfo = styled.div``;
const StyledGetSubscribeToBtn = styled.button``;
const StyledGetSubscribedFromBtn = styled.button``;
const StyledSubscribeBtn = styled.button``;

const SubscribeInfo = ({authorId, onSubscribe, onUnSubscribe, subscribe}) => {
    console.log("너에게 닿기를, ", subscribe, subscribe)
    return (
        <StyledSubscribeInfo>
            <StyledGetSubscribeToBtn>{`${authorId}'s `}Following</StyledGetSubscribeToBtn>
            <StyledGetSubscribedFromBtn>{`${authorId}'s `}Followed</StyledGetSubscribedFromBtn>
            {
                (subscribe) ? <StyledSubscribeBtn onClick={onUnSubscribe}>구독 중</StyledSubscribeBtn>
                            : <StyledSubscribeBtn onClick={onSubscribe}>구독하기</StyledSubscribeBtn>
            }
        </StyledSubscribeInfo>
    );
};

export default SubscribeInfo;