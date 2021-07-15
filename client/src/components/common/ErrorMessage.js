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
`;

const ErrorMessage = (props) => {
    return (
        <StyledErrorMessage {...props}>
            
        </StyledErrorMessage>
    );
};

export default ErrorMessage;