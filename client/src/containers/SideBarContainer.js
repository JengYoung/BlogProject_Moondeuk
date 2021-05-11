import React from 'react'
import SideMenuBtn from '../components/common/SideMenuBtn'
import SideWrap from '../components/common/SideWrap'
import UserImageBox from '../components/common/UserImageBox'

const SideBarContainer = ({ isSideBar, onSideBar }) => {
    return (
        <SideWrap isMain isSideBar={isSideBar}>
            <SideMenuBtn isSideBar={isSideBar} onSideBar={onSideBar}></SideMenuBtn>
            <UserImageBox></UserImageBox>
        </SideWrap>
    )
}

export default SideBarContainer
