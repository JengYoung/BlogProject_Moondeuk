import ProgressBar from 'components/layout/header/ProgressBar';
import React from 'react';
import { useState } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import DiaryContainer from '../containers/post/read/DiaryContainer';
import DiaryFooterContainer from '../containers/post/read/DiaryFooterContainer';
import SearchWrapperContainer from '../containers/search/SearchWrapperContianer';
function DiaryPage() {
    const [ progressBarWidth, setProgressBarWidth ] = useState(0);
    return (
        <>
            <HeaderContainer isDiary progressBarWidth={progressBarWidth} />
            <ProgressBar $progressBarWidth={progressBarWidth}/>
            <SearchWrapperContainer />
            <DiaryContainer setProgressBarWidth={setProgressBarWidth} />
            <DiaryFooterContainer typeName="Diary" />
        </>
    )
}

export default DiaryPage;
