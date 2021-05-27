import React from 'react'
import ResponsiveWrapper from '../components/common/Responsive'
import DiaryFooter from '../components/read/DiaryFooter'
import HeaderContainer from '../containers/HeaderContainer'
import EditorContainer from '../containers/post/write/EditorContainer'
import PostDiaryBtnsWrapperContainer from '../containers/post/write/PostDiaryBtnsWrapperContainer'

function WritePage() {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <ResponsiveWrapper>
                <EditorContainer/>
            </ResponsiveWrapper>
            <DiaryFooter>
                <PostDiaryBtnsWrapperContainer/>
            </DiaryFooter>
        </>
    )
}

export default WritePage
