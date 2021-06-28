import React from 'react'
import { withRouter } from 'react-router';
import HeaderContainer from '../containers/HeaderContainer'
import DiaryListContainer from '../containers/post/list/DiaryListContainer'
import SubscribeInfoContainer from '../containers/post/list/SubscribeInfoContainer'
import SearchWrapperContainer from '../containers/search/SearchWrapperContianer'
function UserPage() {
    return (
        <>
            <HeaderContainer/>
            <SearchWrapperContainer />
            <SubscribeInfoContainer/>
            <DiaryListContainer isUserPage/>
        </>
    )
}

export default withRouter(UserPage)
