import React from 'react';
import CommentInputWrapper from '../components/comment/CommentInputWrapper';
import CommentWrapper from '../components/comment/CommentWrapper';
import HeaderContainer from '../containers/HeaderContainer';
import LikeWrapperContainer from '../containers/like/LikeWrapperContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <>
            <HeaderContainer />
            <DiaryContainer />
            <LikeWrapperContainer />
            <CommentWrapper>
                <CommentInputWrapper />
            </CommentWrapper>
            
        </>
    )
}

export default DiaryPage
