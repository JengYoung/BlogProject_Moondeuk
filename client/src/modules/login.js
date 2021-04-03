import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import loginAPI from '../lib/routes/auth/login';
import { takeLatest } from 'redux-saga/effects';

/* 
    action-types part
*/ 
const ONCHANGE_INPUT = 'login/ONCHAGE_INPUT'
const INITIALIZE_FORM = 'login/INITIALIZE_FORM'

const LOGIN = 'login/LOGIN';
const [ LOGIN_SUCCESS, LOGIN_FAILURE ] = createActionTypes(LOGIN);


/*
    action creator part
*/ 

export const onChangeInput = createAction(ONCHANGE_INPUT, ({ name, value }) => ({
    name, // 로그인 시 입력한 userId, password
    value // 로그인 시 입력한 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form );

export const login = createAction(LOGIN, ({ userId, password }) => ({ 
    userId, 
    password 
}));

/*
    redux-saga part
*/ 
export const loginUserSaga = createSaga(LOGIN, loginAPI);

export function* loginSaga() {
    yield takeLatest(LOGIN, loginUserSaga);
};


/*
    reducer part
*/ 
const initialState = {
    inputs: {
        userId: '',
        password: '',
    },
    loginSuccess: null,
    loginError: null,
};

const loginReducer = handleActions(
    {
        [ONCHANGE_INPUT]: (state, { payload: { name, value }}) => ({
            ...state,
            inputs: {
                ...state.inputs,
                [name]: value,
            }
        }),
        [INITIALIZE_FORM]: state => initialState,
        [LOGIN_SUCCESS]: (state, { payload: loginSuccess }) => ({
            ...state,
            loginSuccess,
            loginError: null
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            loginError: error,
        })
    }, 
    initialState,
)
export default loginReducer;