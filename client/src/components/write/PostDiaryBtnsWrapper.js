import React from 'react'
import styled, { css } from 'styled-components';
import Button from '../common/Button';

/*
*/

const StyledPostDiaryBtnsWrapper = styled.div`
    display: flex;
    button + button {
        margin-left: 1.5rem;
    }
    @media screen and (min-width:469px) {
        padding-right: 2rem;
    }
`;

const StyledPostDiaryBtn = styled(Button)`
    height: 2rem;
    ${props =>
        props.isCancelBtn && css`
            color: lightgray;
            border: 1px solid lightgray;
        `
    }
`;

const PostDiaryBtnsWrapper = ({ isPatch, onPostDiary, onCancel }) => {
    return (
        <StyledPostDiaryBtnsWrapper>
            <StyledPostDiaryBtn isCancelBtn onClick={onCancel}>작성 취소</StyledPostDiaryBtn>
            {isPatch ? 
                <StyledPostDiaryBtn onClick={onPostDiary}>일기 수정</StyledPostDiaryBtn> : 
                <StyledPostDiaryBtn onClick={onPostDiary}>일기 올리기</StyledPostDiaryBtn>
            }
        </StyledPostDiaryBtnsWrapper>
    );
};

export default PostDiaryBtnsWrapper;