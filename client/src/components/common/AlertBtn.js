import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledAlertBtn = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
    background-color: transparent;
    border: 1px solid lightgray;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`;

const AlertBtn = (props) => {
    return (
        <StyledAlertBtn {... props}>
            
        </StyledAlertBtn>
    );
};

export default AlertBtn;