import React from 'react'
import styled, { css } from 'styled-components';

/**
 * * AuthWrap : wrap that contains auth(login / register)'s logo and form
**/

const StyledAuthWrap = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-height: 100%;
    ${props =>
        props.register && css`
            justify-content: flex-start;
        `
    }
    @media (max-width: 500px) {
    };
    @media (min-width: 501px) {
    };
`;

const AuthWrap = (props) => {
    return (
        <StyledAuthWrap {...props}>
        </StyledAuthWrap>
    );
};

export default AuthWrap;