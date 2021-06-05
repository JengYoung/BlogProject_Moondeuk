import React from 'react'
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';
import SubscribeListModal from '../subscribe/SubscribeListModal';
import {AiFillStar} from 'react-icons/ai';
/*
*/

const StyledSubscribeInfo = styled(ResponsiveWrapper)`
    display: flex;
    position: relative;
    flex-direction: column;
    padding-bottom: 2rem;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    button {
        margin: 0.5rem;
    }
`;
const SubscribeListBtn = styled.button`
    div {
        font-size: 2rem;
        font-weight: 600;
    }
    &:hover {
        cursor: pointer;
        color: #ffe600;
    }
`;
const StyledSubscribeBtn = styled.button`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: transparent;
    font-weight: 700;
    color: #2d1c31;
    svg {
        font-size: 2rem; 
    }
    &:hover {
        cursor: pointer;
        background-color: #e5bdf5;
        border-radius: 5px;
        color: #fffb00;
        transition: all 0.5s;
        /* ${
            props =>
                !props.isSubscribe && css`
                    background-color: #e5bdf5;
                    border-radius: 5px;
                    color: #fffb00;
                    transition: all 0.5s;
                `
        } */
    }
    ${props =>
        props.isSubscribe && css`
            color: #ffe600;
            &:hover {
                background: transparent;
                color: #2d1c31;
                &::after {
                    content: "구독 취소";
                }
            }
        `
    }
`;

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
    // console.log("subscribe: ", subscribe)
    return (
        <StyledSubscribeInfo>
            <SubscribeListModal 
                modal={modal} 
                isSubscribeList={isSubscribeList} 
                subscribeToList={subscribeToList} 
                subscribedFromList={subscribedFromList} 
                onConfirm={onConfirm}>
            </SubscribeListModal>
            {
                (subscribe) ? 
                    <StyledSubscribeBtn isSubscribe={true} onClick={onUnSubscribe}>
                        <AiFillStar/>
                    </StyledSubscribeBtn>
                    : 
                    <StyledSubscribeBtn isSubscribe={false} onClick={onSubscribe}><AiFillStar/>+ 구독하기</StyledSubscribeBtn>
            }
            <div>
                <SubscribeListBtn onClick={onGetSubscribeList}>
                    <div>{subscribeList.count}</div> 
                    <span>팔로잉</span>
                </SubscribeListBtn>
                <SubscribeListBtn onClick={onGetSubscribedList}>
                    <div>{subscribedList.count}</div>
                    <span>팔로우</span>
                </SubscribeListBtn>
            </div>
        </StyledSubscribeInfo>
    );
};

export default SubscribeInfo;