import React from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../components/common/Header'
import { conformAlertUser } from '../modules/alert';
import { check, logout } from '../modules/user';
import SideBarContainer from './SideBarContainer';

const HeaderContainer = (props) => {
    const [ isSideBar, setIsSideBar ] = useState(false);
    const { user, alerts } = useSelector(({ userReducer, alertReducer }) => ({ 
        user: userReducer.user,
        alerts: alertReducer.alerts, 
    }));
    const user_id = user ? user._id : null;
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

    const onConform = () => {
        dispatch(conformAlertUser(user_id))
    };

    return (
        <>
            <Header 
                user={user} 
                onLogout={onLogout} 
                write={props.write} 
                checkUser={checkUser}
                onSideBar={onSideBar}
                alerts={alerts}
                onConform={onConform}
            />
            <SideBarContainer isSideBar={isSideBar} onSideBar={onSideBar} />
        </>
    )
}

export default React.memo(HeaderContainer)
