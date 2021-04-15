import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledUserInfo = styled.div``;
const UserInfo = ({authorId}) => {
    return (
        <StyledUserInfo>
            <h3>{authorId ? authorId : ''}</h3>
        </StyledUserInfo>
    );
};

export default UserInfo;