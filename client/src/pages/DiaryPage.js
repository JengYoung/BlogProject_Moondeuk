import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LikeBtnContainer from '../containers/like/LikeBtnContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <>
            <HeaderContainer />
            <DiaryContainer />
            <LikeBtnContainer/>
        </>
    )
}

export default DiaryPage
