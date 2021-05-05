import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertBtn from '../../components/common/AlertBtn'
import { checkAlertUser } from '../../modules/alert';

function AlertBtnContainer() {
    const dispatch = useDispatch();
    const { user, alerts } =  useSelector(({ userReducer, alertReducer }) => ({
        user: userReducer.user,
        alerts: alertReducer.alerts,
    }));
    const user_id = user ? user._id : null;
    console.log(user_id)
    
    /* count: the number of 'checkRead = false' datas */ 
    const [ count, setCount ] = useState(0)
    const checkCount = () => {
        let cnt = 0;
        for (let i=0; i < alerts.length; i++) {
            if (alerts[i].checkRead === false) cnt++;
        }
        return cnt;
    }
    
    useEffect(() => {
        dispatch(checkAlertUser(user_id))
        setCount(checkCount())
    }, [dispatch])
    
    return (
        <AlertBtn count={count}>
        </AlertBtn>
    )
}

export default AlertBtnContainer
