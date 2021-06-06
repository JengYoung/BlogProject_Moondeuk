import React from 'react'
import styled, { css } from 'styled-components';

/**
**/
const StyledNameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    color: white;
    ${props =>
        props.isSubscribePage && css`
            color: black;
        `
    }
`;
const StyledUserNickName = styled.h1`
    font-size: 1.5rem;
`;
const StyledUserId = styled.h2`
    font-size: 0.8rem;
    font-weight: 500;
`

const UserNameBox = (props) => {
    console.log('hi');

    return (
        <StyledNameBox {...props}>
            <StyledUserNickName>{props.nickname}</StyledUserNickName>
            <StyledUserId>{props.user_id ? `(${props.user_id})` : ''}</StyledUserId>
        </StyledNameBox>
    );
};

export default React.memo(UserNameBox);