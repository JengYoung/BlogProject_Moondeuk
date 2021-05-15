import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertBtn from '../../components/common/AlertBtn'
import { checkAlertUser, initializeAlert } from '../../modules/alert';

function AlertBtnContainer({ onOpenAlertList }) {
    const dispatch = useDispatch();
    const { user, alerts } =  useSelector(({ userReducer, alertReducer }) => ({
        user: userReducer.user,
        alerts: alertReducer.alerts,
    }));
    const user_id = user ? user._id : null;
    
    /* count: the number of 'checkRead = false' datas */ 
    const [ count, setCount ] = useState(0)
    const check = useCallback(() => dispatch(checkAlertUser(user_id)), [dispatch, user_id]);
    const checkCount = useCallback(() => {
        let cnt = 0
        alerts.map(alert => {
            if (alert.checkRead === false) cnt++;
            return alert;
        })    
        setCount(cnt)
    },[alerts])

    useEffect(() => {
        check()
        return () => {
            dispatch(initializeAlert())
        };
    },[dispatch, check])

    useEffect(() => {
        checkCount();
    }, [checkCount])

    return (
        <AlertBtn onOpenAlertList={onOpenAlertList} count={count}>
        </AlertBtn>
    )
}

export default React.memo(AlertBtnContainer)
