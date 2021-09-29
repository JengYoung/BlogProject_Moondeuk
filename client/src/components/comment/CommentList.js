import { StyledResponsive } from 'components/common/ResponsiveWrapper';
import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledCommentList = styled(StyledResponsive)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    ${({ theme }) => css`
        background: ${theme.commentWrapperBgColor};
    `}
`;

const CommentList = props => {
    return (
        <StyledCommentList { ...props }>
        </StyledCommentList>
    );
};

export default CommentList;