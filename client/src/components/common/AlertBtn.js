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

const AlertBtn = ({ onConform, count}) => {
    return (
        <StyledAlertBtn onClick={onConform}>
            {count}
        </StyledAlertBtn>
    );
};

export default AlertBtn;