import React from 'react'
import styled from 'styled-components';
import Modal from '../common/Modal';

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
<<<<<<< HEAD
            <Modal body="하이하이"></Modal>
=======
            <Modal></Modal>
>>>>>>> a2a08516cccd24dec93ac271868506b01d592ba4
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