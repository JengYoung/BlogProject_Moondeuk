import useError from 'lib/hooks/useError';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterForm from '../../../components/register/RegisterForm';
import { initializeForm, onChangeInput, register } from '../../../modules/register';

const RegisterContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { inputs, registerSuccess, registerError } = useSelector(({registerReducer}) => ({
        inputs: registerReducer.inputs,
        registerError: registerReducer.registerError,
        registerSuccess: registerReducer.registerSuccess,
    }))
    const { error, setError, isErrorEvent, setIsErrorEvent } = useError(registerError);
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(onChangeInput({ inputs, name, value }))
    }
    const onSubmit = (e) => {
        const { userId, password, passwordConform, nickname } = inputs;
        e.preventDefault();
        if ([userId, password, passwordConform, nickname].includes('')) {
            setError("정보를 모두 입력해주세요! 🥺")
            return;
        }
        if (password !== passwordConform) {
            setError("입력하신 두 비밀번호가 같지 않습니다. 🥺")
            return;
        }
        dispatch(register({ userId, password, passwordConform, nickname }))
    }

    useEffect(() => {
        dispatch(initializeForm());
        return () => dispatch(initializeForm());
    }, [dispatch])

    useEffect(() => {
        if (registerError) {
            if (registerError.request.status === 409) return setError('이미 사용중인 ID에요! 😥');
            if (registerError.request.status === 500) return setError('앗! 서버 측 오류가 발생했어요 😂');
            setError('다시 한 번 시도해주세요! 🥺');
            return;
        } 
        if (registerSuccess) {
            if (registerSuccess.errors) {
                setError(registerSuccess['errors']['0']['msg']);
                return;
            }
            alert('회원가입이 성공적으로 완료되었어요! 👏🌈');
            history.push('/login');
        };
    }, [ registerSuccess, registerError, dispatch, history, setError ])

    return (
        <RegisterForm 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            inputs={inputs}
            isErrorEvent={isErrorEvent}
            setIsErrorEvent={setIsErrorEvent}
        />
    )
}

export default withRouter(RegisterContainer);
