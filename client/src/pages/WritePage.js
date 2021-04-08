import React from 'react';
import WriteBackground from '../components/write/WriteBackground';
import HeaderContainer from '../containers/HeaderContainer';
import TagBarContainer from '../containers/post/write/TagBarContainer';
import WriteFormContainer from '../containers/post/write/WriteFormContainer';
function WritePage() {
    return (
        <>
            <HeaderContainer write/>
            <TagBarContainer />
            <WriteBackground>
                <WriteFormContainer />
            </WriteBackground>
        </>
    )
}

export default WritePage
