import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LikeBtnContainer from '../containers/like/LikeBtnContainer';
import LikeCounterContainer from '../containers/like/LikeCounterContainer';
import LikeWrapper from '../containers/like/LikeWrapper';
import DiaryContainer from '../containers/post/read/DiaryContainer';

function DiaryPage() {
    return (
        <>
            <HeaderContainer />
            <DiaryContainer />
            <LikeWrapper>
                <LikeBtnContainer/>
                <LikeCounterContainer/>
            </LikeWrapper>

        </>
    )
}

export default DiaryPage
