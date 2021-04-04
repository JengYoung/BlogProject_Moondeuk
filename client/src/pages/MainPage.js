import React from 'react'
import { useSelector } from 'react-redux'

function MainPage() {
    const { user } = useSelector(({ userReducer }) => ({
        user: userReducer.user,
    }))
    return (
        <button>
            {user ? "로그아웃" : "로그인"}
        </button>
    )
}

export default MainPage
