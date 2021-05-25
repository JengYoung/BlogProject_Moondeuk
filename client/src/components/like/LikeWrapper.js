import React from 'react'
import styled, { css } from 'styled-components';

/*
*/
const StyledLikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50px;
    position: fixed;
    right: 200px;
    ${props =>
        props.typeName !== 'Diary' && css`
            position: relative;
            right: 0px;
        `
    }
`;

const LikeWrapper = (props) => {
    return (
        <StyledLikeWrapper {...props}>
            
        </StyledLikeWrapper>
    );
};

export default LikeWrapper;