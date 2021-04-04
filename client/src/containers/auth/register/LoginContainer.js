import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import LoginWrapper from '../../../components/login/LoginWrapper'
import { initializeForm, login, onChangeInput } from '../../../modules/login';
import { check } from '../../../modules/user';

function Logincontainer({ history }) {
    const [ error, setError ] = useState(null);
    const dispatch = useDispatch();
    const { inputs, loginSuccess, loginError, user } = useSelector(({ loginReducer, userReducer }) => ({
        inputs: loginReducer.inputs,
        loginSuccess: loginReducer.loginSuccess,
        loginError: loginReducer.loginError,
        user: userReducer.user,
    }));
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(onChangeInput({ inputs, name, value }))
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { userId, password } = inputs;
        dispatch(login({ userId, password }));
    };

    useEffect(() => {
        dispatch(initializeForm());
    }, [dispatch])

    useEffect(() => {
        if (loginError) {
            setError('아이디나 비밀번호가 틀립니다.');
            return; 
        } else if (loginSuccess) {
            console.log('로그인 성공');
            dispatch(check());
        } 
    },[loginError, loginSuccess, dispatch])

    useEffect(() => {
        if (!user) return;
        history.push('/')
        try {
            localStorage.setItem('user', JSON.stringify(user));
        } catch(e) {
            console.error('LocalStorage ERROR occured')
        }
    },[history, user]);

    return (
        <LoginWrapper 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    )
}

export default withRouter(Logincontainer)
