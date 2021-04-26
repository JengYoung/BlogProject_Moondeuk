import React from 'react'
import { withRouter } from 'react-router';
import HeaderContainer from '../containers/HeaderContainer'
import DiaryListContainer from '../containers/post/list/DiaryListContainer'
import SubscribeInfoContainer from '../containers/post/list/SubscribeInfoContainer'

function MainPage() {
    return (
        <>
            <HeaderContainer />
            <SubscribeInfoContainer/>
            <DiaryListContainer/>
        </>
    )
}

export default withRouter(MainPage)
