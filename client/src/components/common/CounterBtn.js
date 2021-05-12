import React from 'react'
import styled from 'styled-components';

/**
**/

const StyledCounterBtn = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    &:hover {
        cursor: pointer;
    }
`;

const CounterBtn = (props) => {
    return (
        <StyledCounterBtn {...props}>
            
        </StyledCounterBtn>
    );
};

export default CounterBtn;