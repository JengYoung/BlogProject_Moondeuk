import React from 'react'
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../common/ResponsiveWrapper';
import SubscribeListModal from '../subscribe/SubscribeListModal';
import {AiFillStar} from 'react-icons/ai';
import UserImage from '../common/UserImage';
import UserNameBox from '../common/UserNameBox';
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
`;
const SubscribeListBtn = styled.button`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.125rem 1rem;
    padding: 0 1rem 0.5rem 1rem;
    div {
        font-size: 2rem;
        font-weight: 600;
    }
    ${({ theme }) => css`
        color: ${theme.fontColor};
        &:hover {
            cursor: pointer;
            color: ${theme.event.hoverBg};
        }
    `}
`;
const StyledSubscribeBtn = styled.button`
    display: flex;
    margin-top: 1rem;
    padding: 0.125rem 1rem;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 1rem;
    background: transparent;
    font-weight: 700;
    ${({ theme }) => css`
        color: ${theme.fontColor};
        &:hover {
            cursor: pointer;
            transition: all 0.3s;
            background: ${theme.event.hoverBg};
            color: ${theme.event.buttonHoverColor};
        }
    `}
    svg {
        font-size: 2rem; 
    }
    ${props =>
        props.isSubscribe && css`
            color: #ffe600;
            &:hover {
                transition: all 0.3s;
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
        subscribedList,
        otherUserInfo
    }) => {
    const { subscribeToList } = subscribeList;
    const { subscribedFromList } = subscribedList;
    // console.log("subscribe: ", subscribe)
    const otherUserImage = otherUserInfo ? otherUserInfo.userImage : null;
    const otherUserNickname = otherUserInfo ? otherUserInfo.nickname : null;
    return (
        <StyledSubscribeInfo>
            <SubscribeListModal 
                modal={modal} 
                isSubscribeList={isSubscribeList} 
                subscribeToList={subscribeToList} 
                subscribedFromList={subscribedFromList} 
                onConfirm={onConfirm}>
            </SubscribeListModal>
            <UserImage isSubscribePage userImage={otherUserImage}/>
            <UserNameBox 
                isSubscribePage
                user_id={authorId}
                nickname={otherUserNickname}
            />
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
                    <span>구독 중</span>
                </SubscribeListBtn>
                <SubscribeListBtn onClick={onGetSubscribedList}>
                    <div>{subscribedList.count}</div>
                    <span>구독자</span>
                </SubscribeListBtn>
            </div>
        </StyledSubscribeInfo>
    );
};

export default SubscribeInfo;