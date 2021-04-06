import React from 'react'
import Header from '../components/common/Header'
import WriteBackground from '../components/write/WriteBackground'
import WriteForm from '../components/write/WriteForm'

function WritePage() {
    return (
        <>
            <Header write/>
            <WriteBackground>
                <WriteForm></WriteForm>
            </WriteBackground>
        </>
    )
}

export default WritePage
