import React from 'react'
import styled from 'styled-components';

/**
**/
const StyledNameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;
const StyledUserNickName = styled.h1`
    font-size: 1.5rem;
    color:white;
`;
const StyledUserId = styled.h2`
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
`

const UserNameBox = (props) => {
    return (
        <StyledNameBox {...props}>
            <StyledUserNickName>{props.nickname}</StyledUserNickName>
            <StyledUserId>({props.user_id})</StyledUserId>
        </StyledNameBox>
    );
};

export default UserNameBox;