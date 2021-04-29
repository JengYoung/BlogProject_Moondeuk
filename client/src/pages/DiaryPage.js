import React from 'react';
import CommentWrapperContainer from '../containers/comment/CommentWrapperContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LikeWrapperContainer from '../containers/like/LikeWrapperContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <>
            <HeaderContainer />
            <DiaryContainer />
            <LikeWrapperContainer />
            <CommentWrapperContainer />
        </>
    )
}

export default DiaryPage
