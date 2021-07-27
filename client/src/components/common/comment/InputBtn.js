import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledInputBtn = styled.button`
    height: 7rem;
    width: 7rem;
    border-radius: 0 10px 10px 0;
    ${({theme}) => css`
        background: ${theme.buttonBg};
        color: ${theme.buttonColor};
        :hover {
            transition: all 0.3s;
            background: ${theme.event.hoverBg};
        }
    `}
`;

const InputBtn = props => {
    return (
        <StyledInputBtn { ...props }/>
    );
};

export default InputBtn;