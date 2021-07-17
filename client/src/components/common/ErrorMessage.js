import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledErrorMessage = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 0.9rem;
    padding-top: 1.5rem;
    ${({ theme }) => css`
        color: ${theme.errorColor};
    `}
    // 클라이언트에서 처리한 에러의 경우
    ${({ isClientError }) => css`
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: right;
        font-size: 0.5rem;
        padding-top: 0;
    `}
`;

const ErrorMessage = (props) => {
    return (
        <StyledErrorMessage {...props}>
            
        </StyledErrorMessage>
    );
};

export default ErrorMessage;