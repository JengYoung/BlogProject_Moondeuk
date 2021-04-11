import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';

/*
*/

const StyledPostDiaryBtnsWrapper = styled.div`
    display: flex;
    button + button {
        margin-left: 1.5rem;
    }
`;

const StyledPostDiaryBtn = styled(Button)`
    height: 2rem;
`;

const PostDiaryBtnsWrapper = ({ isPatch, onPostDiary, onCancel }) => {
    return (
        <StyledPostDiaryBtnsWrapper>
            {isPatch ? 
                <StyledPostDiaryBtn onClick={onPostDiary}>일기 수정</StyledPostDiaryBtn> : 
                <StyledPostDiaryBtn onClick={onPostDiary}>일기 올리기</StyledPostDiaryBtn>
            }
            <StyledPostDiaryBtn onClick={onCancel}>작성 취소</StyledPostDiaryBtn>
        </StyledPostDiaryBtnsWrapper>
    );
};

export default PostDiaryBtnsWrapper;