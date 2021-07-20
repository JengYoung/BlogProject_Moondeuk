import React from 'react'
import styled from 'styled-components';

/**
 * * AuthWrap : wrap that contains auth(login / register)'s logo and form
**/

const StyledAuthWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 30;
    opacity: 0.91;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    padding: 0 1rem;
    overflow: hidden;

    // dark-mode 여부에 따른 CSS 효과
    background-color: ${({ theme }) => theme.loginBg};
    transition: background-color 0.3s;
`;

const AuthWrap = (props) => {
    return (
        <StyledAuthWrap {...props}>
        </StyledAuthWrap>
    );
};

export default AuthWrap;