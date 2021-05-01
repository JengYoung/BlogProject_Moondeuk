import React from 'react'
import styled from 'styled-components';
import BtnsWrapper from '../common/comment/BtnsWrapper';
import ListItem from '../common/comment/ListItem';
import ReplyCommentBtn from '../common/comment/ReplyCommentBtn';

/*
*/
const StyledReplyCommentUserInfo = styled.span`
    font-size: 0.7rem;
    font-weight: 300;
`;

const StyledReplyCommentContent = styled.span`
    font-size: 0.9rem;
`;

const StyledReplyCommentBtn = styled(ReplyCommentBtn)`
    font-size: 0.9rem;
`;

const StyledBtnsWrapper = styled(BtnsWrapper)``;

const StyledReplyCommentListItem = styled(ListItem)``;

const ReplyCommentListItem = (props) => {
    return (
        <StyledReplyCommentListItem {...props}>
            <StyledReplyCommentUserInfo>재영(jaeyoung)</StyledReplyCommentUserInfo>
            <StyledReplyCommentContent>테스트 중이야!</StyledReplyCommentContent>
            <StyledBtnsWrapper/>
            <StyledReplyCommentBtn/>
        </StyledReplyCommentListItem>
    );
};

export default ReplyCommentListItem;