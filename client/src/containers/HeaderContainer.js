import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../components/common/Header'
import { check, logout } from '../modules/user';
import SideBarContainer from './SideBarContainer';

const HeaderContainer = (props) => {
    const [ isSideBar, setIsSideBar ] = useState(false);
    const { user, alerts } = useSelector(({ userReducer, alertReducer }) => ({ 
        user: userReducer.user,
        alerts: alertReducer.alerts, 
    }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    const onSideBar = () => {
        setIsSideBar(!isSideBar)
        console.log("now isSideBar in Header: ", isSideBar)
    };
    const checkUser = useCallback(() => {
        dispatch(check())
    }, [dispatch])

    return (
        <>
            <Header 
                user={user} 
                onLogout={onLogout} 
                write={props.write} 
                checkUser={checkUser}
                onSideBar={onSideBar}
                alerts={alerts}
            />
            <SideBarContainer isSideBar={isSideBar} onSideBar={onSideBar} />
        </>
    )
}

export default React.memo(HeaderContainer)
