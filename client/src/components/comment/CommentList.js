import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentList = styled.div`
    padding: 1rem;
`;

const CommentList = props => {
    return (
        <StyledCommentList { ...props }>
        </StyledCommentList>
    );
};

export default CommentList;