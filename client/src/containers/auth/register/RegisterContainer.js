import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterForm from '../../../components/register/RegisterForm';
import { initializeForm, onChangeInput, register } from '../../../modules/register';

const RegisterContainer = ({ history }) => {
    console.log(history);
    const [ error, setError ] = useState(null);
    const dispatch = useDispatch();
    const { inputs, registerSuccess, registerError } = useSelector(({registerReducer}) => ({
        inputs: registerReducer.inputs,
        registerError: registerReducer.registerError,
        registerSuccess: registerReducer.registerSuccess,
    }))
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(onChangeInput({ inputs, name, value }))
    }
    const onSubmit = (e) => {
        const { userId, password, passwordConform, nickname } = inputs;
        e.preventDefault();
        if ([userId, password, passwordConform, nickname].includes('')) {
            setError("정보를 모두 입력해주세요.")
            return;
        }
        if (password !== passwordConform) {
            setError("입력하신 두 비밀번호가 같지 않습니다.")
            return;
        }
        dispatch(register({ userId, password, passwordConform, nickname }))
    }

    useEffect(() => {
        dispatch(initializeForm())
    }, [dispatch])

    useEffect(() => {
        if (registerError) {
            setError('ID가 이미 존재합니다');
            return;
        } 
        if (registerSuccess) {
            if (registerSuccess.errors) {
                setError(registerSuccess['errors']['0']['msg']);
                return;
            }
            alert('회원가입이 성공적으로 완료되었습니다.');
            history.push('/login');
        };
    }, [ registerSuccess, registerError, dispatch, history ])

    return (
        <RegisterForm 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            inputs={inputs}
        />
    )
}

export default withRouter(RegisterContainer);
