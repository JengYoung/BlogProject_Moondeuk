import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import LoginWrapper from '../../../components/login/LoginWrapper'
import { initializeForm, login, onChangeInput } from '../../../modules/login';
import { check } from '../../../modules/user';
import useError from 'lib/hooks/useError';
import useTheme from 'lib/hooks/useTheme';
import setItemToLocalStorage from 'lib/setItemToLocalStorage';
import getCookie from 'lib/util/getCookie';

function Logincontainer({ history }) {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const { inputs, loginSuccess, loginError, user } = useSelector(({ loginReducer, userReducer }) => ({
        inputs: loginReducer.inputs,
        loginSuccess: loginReducer.loginSuccess,
        loginError: loginReducer.loginError,
        user: userReducer.user,
    }));
    
    const { error, setError, isErrorEvent, setIsErrorEvent } = useError(loginError);

    /* Initialize form - if exists user data => return alert message */ 
    useEffect(() => {
        const USER_COOKIE_KEY = 'access_token';
        if (!user) dispatch(initializeForm()); 
        else {
            history.push('/');
            setItemToLocalStorage(USER_COOKIE_KEY, getCookie(USER_COOKIE_KEY));
        }
    }, [dispatch, user, history])

    /* login - valid user data check */ 
    useEffect(() => {
        if (loginSuccess) dispatch(check());
    },[loginSuccess, dispatch])

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(onChangeInput({ inputs, name, value }))
        setIsErrorEvent(state => ({
            ...state,
            [name]: null
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { userId, password } = inputs;
        if (!userId || !password) {
            setIsErrorEvent(state => ({ 
                ...state, 
                userId: null, 
                password: null
            }))
            /* 메시지를 배열을 통해 생성합니다. */ 
            const errorMessage = [
                ...(!userId ? ['아이디'] : []),
                ...(!userId && !password ? [', '] : []),
                ...(!password ? ['비밀번호'] : []),
                '를 입력해주세요!'
            ].join('');
            setError(errorMessage)
            return;
        }
        dispatch(login({ userId, password }));
    };

    return (
        <LoginWrapper 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            inputs={inputs}
            theme={theme}
            idError={isErrorEvent.userId}
            passwordError={isErrorEvent.password}
        />
    )
}

export default withRouter(React.memo(Logincontainer))
