import React from 'react';
import Header from '../components/common/Header';
import WriteBackground from '../components/write/WriteBackground';
import TagBarContainer from '../containers/post/TagBarContainer';
import WirteFormContainer from '../containers/post/WriteFormContainer';
function WritePage() {
    return (
        <>
            <Header write/>
            <TagBarContainer />
            <WriteBackground>
                <WirteFormContainer />
            </WriteBackground>
        </>
    )
}

export default WritePage
