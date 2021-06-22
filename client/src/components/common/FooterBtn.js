import React from 'react'
import styled, { css } from 'styled-components';

/**
**/

const StyledFooterBtn = styled.button`
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

const FooterBtn = (props) => {
    return (
        <StyledFooterBtn {...props}>
            
        </StyledFooterBtn>
    );
};

export default FooterBtn;