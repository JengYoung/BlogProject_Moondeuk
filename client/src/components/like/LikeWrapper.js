import React from 'react'
import styled from 'styled-components';

/*
*/
const StyledLikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50px;
    position: fixed;
    right: 200px;
`;

const LikeWrapper = (props) => {
    return (
        <StyledLikeWrapper {...props}>
            
        </StyledLikeWrapper>
    );
};

export default LikeWrapper;