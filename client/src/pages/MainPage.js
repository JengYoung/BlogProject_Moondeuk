import React from 'react'
import { withRouter } from 'react-router'
import UserInfo from '../components/common/UserInfo'
import HeaderContainer from '../containers/HeaderContainer'
import DiaryListContainer from '../containers/post/list/DiaryListContainer'
import SubscribeInfoContainer from '../containers/post/list/SubscribeInfoContainer'

function MainPage({match}) {
    const authorId = match.params.userId;
    return (
        <>
            <HeaderContainer>
            </HeaderContainer>
            {authorId && <UserInfo authorId={authorId}></UserInfo>}
            {authorId && <SubscribeInfoContainer authorId={authorId}/>}
            <DiaryListContainer/>
        </>
    )
}

export default withRouter(MainPage)
