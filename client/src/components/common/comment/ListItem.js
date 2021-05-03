import React from 'react'
import styled from 'styled-components';

/*
*/const StyledUserInfo = styled.span`
    font-size: 0.7rem;
    font-weight: 300;
`;

const StyledContent = styled.span`
    font-size: 0.9rem;
`;

const StyledListItem = styled.div`
    padding: 0.5rem 0.5rem;
    display: flex;
    position: relative;
    flex-direction: column;
    &:first-child {
        border-top: 1px solid gray;
    }
    border-bottom: 1px solid gray;
    position: relative;
`;

const ListItem = ({ children, isUpdateMode, replierInfo, content }) => {
    const { userId, nickname } = replierInfo;
    return (
        <StyledListItem>
            <StyledUserInfo>{`${userId}(${nickname})`}</StyledUserInfo>
            {content}
            {children}
        </StyledListItem>
    );
};

export default ListItem;