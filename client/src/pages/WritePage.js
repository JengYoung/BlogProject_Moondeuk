import React from 'react'
import Header from '../components/common/Header'
import ResponsiveWrapper from '../components/common/Responsive'
import EditorContainer from '../containers/post/write/EditorContainer'

function WritePage() {
    return (
        <>
            <Header write></Header>
            <ResponsiveWrapper>
                <EditorContainer>
                </EditorContainer>
            </ResponsiveWrapper>
        </>
    )
}

export default WritePage
