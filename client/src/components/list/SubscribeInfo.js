import React from 'react'
import styled from 'styled-components';
import Modal from '../common/Modal';

/*
*/

const StyledSubscribeInfo = styled.div``;
const StyledGetSubscribeToBtn = styled.button``;
const StyledGetSubscribedFromBtn = styled.button``;
const StyledSubscribeBtn = styled.button``;

const SubscribeInfo = (
    {
        authorId, 
        onSubscribe, 
        onUnSubscribe, 
        subscribe, 
        modal, 
        isSubscribeList,
        onGetSubscribeList, 
        onGetSubscribedList, 
        onConfirm, 
        subscribeList,
        subscribedList
    }) => {
    const { subscribeToList } = subscribeList;
    const { subscribedFromList } = subscribedList;

    console.log("너에게 닿기를, ", subscribe, subscribe)
    return (
        <StyledSubscribeInfo>
            <Modal 
                modal={modal} 
                isSubscribeList={isSubscribeList} 
                subscribeToList={subscribeToList} 
                subscribedFromList={subscribedFromList} 
                onConfirm={onConfirm}>
            </Modal>
            <StyledGetSubscribeToBtn onClick={onGetSubscribeList}>{subscribeList.count} Following</StyledGetSubscribeToBtn>
            <StyledGetSubscribedFromBtn onClick={onGetSubscribedList}>{subscribedList.count} Followed</StyledGetSubscribedFromBtn>
            {
                (subscribe) ? <StyledSubscribeBtn onClick={onUnSubscribe}>구독 중</StyledSubscribeBtn>
                            : <StyledSubscribeBtn onClick={onSubscribe}>구독하기</StyledSubscribeBtn>
            }
        </StyledSubscribeInfo>
    );
};

export default SubscribeInfo;