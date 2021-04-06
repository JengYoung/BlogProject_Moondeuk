import React from 'react'
import styled from 'styled-components';
/*
*/

const StyledWriteBackground = styled.div`
    background-color: purple;
    height: 100%;
    min-height: 100%;
`;

const WriteBackground = ({children}) => {
    return (
        <StyledWriteBackground>
            {children}
        </StyledWriteBackground>
    );
};

export default WriteBackground;