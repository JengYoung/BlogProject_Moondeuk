import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { logout } from '../modules/user';

function MainPage() {
    const { user } = useSelector(({ userReducer }) => ({
        user: userReducer.user,
    }))
    const dispatch = useDispatch();
    const onClick = () => {
        if (!user) return;
        dispatch(logout());
    }
    return (
        <button onClick={onClick}>
            {user ? "로그아웃" : "로그인"}
        </button>
    )
}

export default MainPage
