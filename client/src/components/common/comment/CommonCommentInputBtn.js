import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommonCommentInputBtn = styled.button`
    width: 15%;
`;

const CommonCommentInputBtn = props => {
    return (
        <StyledCommonCommentInputBtn { ...props }/>
    );
};

export default CommonCommentInputBtn;