import React from 'react';
import WriteBackground from '../components/write/WriteBackground';
import HeaderContainer from '../containers/HeaderContainer';
import TagBarContainer from '../containers/post/TagBarContainer';
import WirteFormContainer from '../containers/post/WriteFormContainer';
function WritePage() {
    return (
        <>
            <HeaderContainer write/>
            <TagBarContainer />
            <WriteBackground>
                <WirteFormContainer />
            </WriteBackground>
        </>
    )
}

export default WritePage
