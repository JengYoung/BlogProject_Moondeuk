import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoginWrapper from '../../../components/login/LoginWrapper'
import { initializeForm, login, onChangeInput } from '../../../modules/login';

function Logincontainer() {
    const [ error, setError ] = useState(null);
    const dispatch = useDispatch();
    const { inputs, loginSuccess, loginError } = useSelector(({ loginReducer }) => ({
        inputs: loginReducer.inputs,
        loginSuccess: loginReducer.loginSuccess,
        loginError: loginReducer.loginError
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
            setError('아이디나 비밀번호가 틀립니다.')
            return; 
        } else if (loginSuccess) {
            console.log('로그인 성공')
        } 
    },[loginError, loginSuccess])

    return (
        <LoginWrapper 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    )
}

export default Logincontainer
