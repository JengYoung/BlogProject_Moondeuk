import React from 'react'
import Header from '../components/common/Header'
import WriteBackground from '../components/write/WriteBackground'
import WriteContainer from '../containers/post/WriteContainer'

function WritePage() {
    return (
        <>
            <Header write/>
            <WriteBackground>
                <WriteContainer/>
            </WriteBackground>
        </>
    )
}

export default WritePage
