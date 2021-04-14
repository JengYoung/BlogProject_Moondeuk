import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledUserInfo = styled.div``;
const UserInfo = ({userId}) => {
    return (
        <StyledUserInfo>
            <h3>{userId ? userId : '아이디'}</h3>
        </StyledUserInfo>
    );
};

export default UserInfo;