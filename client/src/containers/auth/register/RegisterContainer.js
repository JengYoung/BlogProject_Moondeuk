import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import RegisterForm from '../../../components/register/RegisterForm';
import { initializeForm, onChangeInput } from '../../../modules/register';
import registerAPI from '../../../lib/routes/auth/register';

const RegisterContainer = () => {
    const [ error, setError ] = useState(null);
    const dispatch = useDispatch();
    const { inputs, register, registerError } = useSelector(({registerReducer}) => ({
        inputs: registerReducer.inputs,
        registerError: registerReducer.registerError,
        register: registerReducer.register,
    }))
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(onChangeInput({ inputs, name, value }))
    }
    const onSubmit = (e) => {
        const { userId, password, passwordConform, nickname, birthday } = inputs;
        e.preventDefault();
        if ([userId, password, passwordConform, nickname, birthday].includes('')) {
            setError("정보를 모두 입력해주세요.")
            console.log([userId, password, passwordConform, nickname, birthday])
            return;
        }
        if (password !== passwordConform) {
            setError("입력하신 두 비밀번호가 같지 않습니다.")
            return;
        }
        dispatch(registerAPI({ userId, password, nickname, birthday }))
    }

    useEffect(() => {
        dispatch(initializeForm())
    }, [dispatch])
    useEffect(() => {
        if (registerError) {
            console.log('오류 발생')
            console.log(registerError.response.status);
            setError('회원가입 실패');
            return;
        } 
        if (register) {
            console.log('성공');
            console.log(register);
        };
    }, [ register, registerError, dispatch ])
    return (
        <RegisterForm 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    )
}

export default RegisterContainer
