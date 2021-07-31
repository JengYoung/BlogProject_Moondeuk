import myColors from 'lib/styles/_color';
import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

/*
*/
const StyledUserInfoBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;
const StyledUserInfo = styled.span`
    margin-left: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
`;

const StyledContent = styled.span`
    font-size: 0.9375rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
`;
const StyledUserImage = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid lightgray;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
    ${props =>
        props.imgUrl && css`
            background-image: url(${props.imgUrl});
            background-size: cover;
        `
    }
`;
const StyledListItem = styled.div`
    padding: 1rem 1rem;
    display: flex;
    position: relative;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    border: 1px solid light gray;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    &:last-child {
        margin-bottom: 0;
    }
    position: relative;
`;

const ReplyTag = styled(Link)`
    color: ${myColors.purple[1]};
    &:hover {
        color: ${myColors.purple[3]};
    }
    text-decoration: none;
    &::after {
        content: " ";
    }
`

const ListItem = ({ replier, replyTo, content, children }) => {
    const { nickname, userImage, userId } = replier;
    const replyToNickname = replyTo.nickname;
    return (
        <StyledListItem>
            <StyledUserInfoBox>
                <StyledUserImage imgUrl={userImage}></StyledUserImage>
                <StyledUserInfo>{nickname}({userId.length > 2 ? userId.slice(0,2) + `******` : userId})</StyledUserInfo>                
            </StyledUserInfoBox>
            <StyledContent>{replyToNickname &&<ReplyTag to={replyTo.userId}> @{replyToNickname}</ReplyTag>}{content}</StyledContent>
            {children}
        </StyledListItem>
    )
};

export default ListItem;