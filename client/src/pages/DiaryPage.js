import React from 'react';
import CommentFormContainer from '../containers/comment/CommentFormContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LikeWrapperContainer from '../containers/like/LikeWrapperContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <>
            <HeaderContainer />
            <DiaryContainer />
            <LikeWrapperContainer />
            <CommentFormContainer />
        </>
    )
}

export default DiaryPage
