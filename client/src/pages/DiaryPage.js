import React from 'react';
import CommentInputWrapperContainer from '../containers/comment/CommentInputWrapperContainer';
import CommentWrapperContainer from '../containers/comment/CommentWrapperContainer';
import HeaderContainer from '../containers/HeaderContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';
import DiaryFooterContainer from '../containers/post/read/DiaryFooterContainer';
import SearchWrapperContainer from '../containers/search/SearchWrapperContianer';
function DiaryPage() {
    return (
        <>
            <HeaderContainer isDiary />
            <SearchWrapperContainer />
            <DiaryContainer/>
            <DiaryFooterContainer/>
            <CommentWrapperContainer />
            <CommentInputWrapperContainer/>
        </>
    )
}

export default DiaryPage
