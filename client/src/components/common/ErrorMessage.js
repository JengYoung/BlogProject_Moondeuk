import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledErrorMessage = styled.div`
    text-align: center;
    color: red;
    font-weight: 700;
`;

const ErrorMessage = (props) => {
    return (
        <StyledErrorMessage {...props}>
            
        </StyledErrorMessage>
    );
};

export default ErrorMessage;