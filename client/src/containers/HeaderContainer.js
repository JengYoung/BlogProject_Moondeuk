import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../components/common/Header'
import { logout } from '../modules/user';

const HeaderContainer = (props) => {
    const { user } = useSelector(({ userReducer }) => ({ user: userReducer.user }));
        const dispatch = useDispatch();
        const onLogout = () => {
            dispatch(logout());
        };
    
    return (
        <>
            {console.log(user)}
            <Header user={user} onLogout={onLogout} write={props.write}/>
        </>
    )
}

export default HeaderContainer
