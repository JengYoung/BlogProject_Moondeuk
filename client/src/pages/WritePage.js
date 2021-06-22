import React from 'react'
import DiaryFooter from '../components/read/DiaryFooter'
import HeaderContainer from '../containers/HeaderContainer'
import WriteFormContainer from '../containers/post/write/WriteFormContainer'
import PostDiaryBtnsWrapperContainer from '../containers/post/write/PostDiaryBtnsWrapperContainer'

function WritePage() {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <WriteFormContainer/>
            <DiaryFooter>
                <PostDiaryBtnsWrapperContainer/>
            </DiaryFooter>
        </>
    )
}

export default WritePage
