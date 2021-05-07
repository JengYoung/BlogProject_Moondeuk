import React from 'react'
import styled, { css } from 'styled-components';
import RegisterInputBox from './RegisterInputBox';

/**
**/

const StyledRegisterInputBoxWrap = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: row;
    /* overflow-x: hidden; */
    padding-bottom: 3rem;
    * {
        width: 300px;
    }
`;

const RegisterInputBoxWrap = (props) => {
    return (
        <StyledRegisterInputBoxWrap {...props}>
            <RegisterInputBox name="userId"></RegisterInputBox>
            <RegisterInputBox name="password"></RegisterInputBox>
            <RegisterInputBox name="nickname"></RegisterInputBox>
            <RegisterInputBox type="file" name="userImage"></RegisterInputBox>
        </StyledRegisterInputBoxWrap>
    );
};

export default RegisterInputBoxWrap;