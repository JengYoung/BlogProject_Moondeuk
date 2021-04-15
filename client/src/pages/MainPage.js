import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import DiaryListContainer from '../containers/post/list/DiaryListContainer'
import SubscribeInfoContainer from '../containers/post/list/SubscribeInfoContainer'

function MainPage() {
    return (
        <>
            <HeaderContainer>
            </HeaderContainer>
            <SubscribeInfoContainer/>
            <DiaryListContainer/>
        </>
    )
}

export default MainPage
