import React from 'react'
import styled from 'styled-components';
import UserImageBox from './UserImageBox';

/*
*/

const StyledUserInfo = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const UserIdAndNickname = styled.h2`
    margin: 0;
    padding-top: 0.5rem;
    font-size: 20px;
`;
const UserInfo = ({propId}) => {
    return (
        <StyledUserInfo>
            <UserImageBox></UserImageBox>
            <UserIdAndNickname>{propId ? propId : ''}</UserIdAndNickname>
        </StyledUserInfo>
    );
};

export default UserInfo;