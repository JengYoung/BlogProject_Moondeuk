import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledInputBtn = styled.button`
    width: 15%;
`;

const InputBtn = props => {
    return (
        <StyledInputBtn { ...props }/>
    );
};

export default InputBtn;