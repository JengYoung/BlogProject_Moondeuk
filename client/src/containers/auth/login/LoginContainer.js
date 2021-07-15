import LoginBackground from 'components/login/LoginBackground';
import useError from 'lib/hooks/useError';
import useTheme from 'lib/hooks/useTheme';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import LoginWrapper from '../../../components/login/LoginWrapper'
import { initializeForm, login, onChangeInput } from '../../../modules/login';
import { check } from '../../../modules/user';

function Logincontainer({ history }) {
    // const [ error, setError ] = useState(null);
    const dispatch = useDispatch();
    const { theme } = useTheme();
    const { inputs, loginSuccess, loginError, user } = useSelector(({ loginReducer, userReducer }) => ({
        inputs: loginReducer.inputs,
        loginSuccess: loginReducer.loginSuccess,
        loginError: loginReducer.loginError,
        user: userReducer.user,
    }));
    const error = useError(loginError);

    /* Initialize form - if exists user data => return alert message */ 
    useEffect(() => {
        if (!user) dispatch(initializeForm()); 
        else {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch(e) {
                alert('로컬스토리지에서 오류가 발생했어요!');
                console.error('LocalStorage ERROR occured');
            }
        }
    }, [dispatch, user, history])

    /* login - valid user data check */ 
    useEffect(() => {
        if (loginSuccess) dispatch(check());
    },[loginSuccess, dispatch])

    // /* if exists user data, put this on localStorage, go to main page */
    // useEffect(() => {
    //     if (user) {
    //         history.push('/');
    //         try {
    //             localStorage.setItem('user', JSON.stringify(user));
    //         } catch(e) {
    //             alert('로컬스토리지에서 오류가 발생했어요!');
    //             console.error('LocalStorage ERROR occured');
    //         }
    //     }
    // },[history, user]);

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(onChangeInput({ inputs, name, value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { userId, password } = inputs;
        dispatch(login({ userId, password }));
    };

    return (
        <LoginWrapper 
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
            inputs={inputs}
            theme={theme}
        />
    )
}

export default withRouter(React.memo(Logincontainer))
