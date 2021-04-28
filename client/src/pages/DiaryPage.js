import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LikeWrapperContainer from '../containers/like/LikeWrapperContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <>
            <HeaderContainer />
            <DiaryContainer />
            <LikeWrapperContainer />

        </>
    )
}

export default DiaryPage
