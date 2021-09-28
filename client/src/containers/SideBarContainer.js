import DarkModeBtn from 'components/common/DarkModeBtn'
import LoginMessage from 'components/common/LoginMessage'
import SideBtnLinks from 'components/layout/aside/BtnLinks'
import SideQuickMenus from 'components/layout/aside/SideQuickMenus'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideMenuBtn from '../components/common/SideMenuBtn'
import SideWrap from '../components/common/SideWrap'
import UserImageBox from '../components/common/UserImageBox'
import UserName from '../components/common/UserNameBox'
import { check } from '../modules/user'

const SideBarContainer = ({ isSideBar, onSideBar }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const userId = user?.userId;
    const user_id = user?._id;
    const nickname = user?.nickname;
    const userImage = user?.userImage;
    const checkUser = useCallback(() => {
        dispatch(check())
    }, [dispatch])
    return (
        <SideWrap isSideBar={isSideBar}>
            <SideMenuBtn isSideBar={isSideBar} onSideBar={onSideBar}></SideMenuBtn>
            <DarkModeBtn isSideBar/>
            {
                userId &&
                    <>
                        <UserImageBox 
                            user_id={user_id}
                            userImage={userImage} 
                            checkUser={checkUser}
                        />
                        <UserName userId={userId} nickname={nickname}></UserName>
                        <SideBtnLinks userId={userId}/>
                        <SideQuickMenus/>
                    </>
            }
            {!userId && 
                <>
                    <LoginMessage></LoginMessage>
                </>
            }
        </SideWrap>
    )
}

export default SideBarContainer
