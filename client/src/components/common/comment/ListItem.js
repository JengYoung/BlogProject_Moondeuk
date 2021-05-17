import React from 'react'
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
    font-size: 0.7rem;
    font-weight: 700;
`;

const StyledContent = styled.span`
    font-size: 0.9rem;
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
    padding: 0.5rem 0.5rem;
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


const ListItem = ({ children, isUpdateMode, replierInfo, content }) => {
    const { userId, nickname } = replierInfo;
    const imgUrl = null;
    return (
        <StyledListItem>
            <StyledUserInfoBox>
                <StyledUserImage imgUrl={imgUrl}></StyledUserImage>
                <StyledUserInfo>{`${userId}(${nickname})`}</StyledUserInfo>                
            </StyledUserInfoBox>
            <StyledContent>{content}</StyledContent>
            {children}
        </StyledListItem>
    )
};

export default ListItem;