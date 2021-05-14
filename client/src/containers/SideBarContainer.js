import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideMenuBtn from '../components/common/SideMenuBtn'
import SideWrap from '../components/common/SideWrap'
import UserImageBox from '../components/common/UserImageBox'
import { check } from '../modules/user'

const SideBarContainer = ({ isSideBar, onSideBar }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);
    const user_id = user ? user.user_id : null;
    const user_image = user ? user.userImage : null;
    const checkUser = useCallback(() => {
        dispatch(check())
    }, [dispatch])
    return (
        <SideWrap isMain isSideBar={isSideBar}>
            <SideMenuBtn isSideBar={isSideBar} onSideBar={onSideBar}></SideMenuBtn>
            <UserImageBox 
                user_id={user_id} 
                user_image={user_image} 
                checkUser={checkUser}
            />
        </SideWrap>
    )
}

export default SideBarContainer
