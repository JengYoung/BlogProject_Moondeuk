import React from 'react'
import styled, { css } from 'styled-components';

/**
**/
const StyledNameBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    color: white;

    ${({ theme, isSubscribePage }) => css`
        ${isSubscribePage && css`padding-top: 1rem;`}
        color: ${theme.fontColor};
    `}
`;
const StyledUserNickName = styled.h1`
    font-size: 1.5rem;
`;
const StyledUserId = styled.h2`
    font-size: 0.8rem;
    font-weight: 500;
`

const UserNameBox = (props) => {
    const { nickname, userId } = props;
    return (
        <StyledNameBox {...props}>
            <StyledUserNickName>{nickname}</StyledUserNickName>
            <StyledUserId>{userId ? `(${userId})` : ''}</StyledUserId>
        </StyledNameBox>
    );
};

export default React.memo(UserNameBox);