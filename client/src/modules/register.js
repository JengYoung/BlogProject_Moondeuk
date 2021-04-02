import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import registerAPI from '../lib/routes/auth/register';
import { takeLatest } from 'redux-saga/effects'
import createSaga from '../lib/createSaga';

/* 
    createActionType part
*/ 
const REGISTER = 'register/REGISTER';
const [REGISTER_SUCCESS, REGISTER_FAILURE] = createActionTypes(REGISTER);
const ONCHANGE_INPUT = 'register/ONCHANGE_INPUT';
const INITIALIZE_FORM = 'register/INITIALIZE_FORM';

/* 
    createAction part
*/ 
export const onChangeInput = createAction(ONCHANGE_INPUT, ({ name, value }) => ({ 
    name, // each input's name props (userId, password, nickname, birthday ...)
    value // each input's value
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form )

export const register = createAction(REGISTER, ({ userId, password, passwordConform, nickname, birthday }) => ({ 
    userId, // 유저 ID
    password, // 비밀번호
    passwordConform, // 비밀번호 확인
    nickname, // 닉네임
    birthday // 생일
}));

/* 
    redux-saga part 
*/ 
const registerUserSaga = createSaga(REGISTER, registerAPI);
export function* registerSaga() {
    yield takeLatest(REGISTER, registerUserSaga);
}

const initialState = {
    inputs: {
        userId: '',
        password: '',
        passwordConform: '',
        nickname: '',
        birthday: '',
    },
    registerSuccess: null,
    registerError: null
}

export const registerReducer = handleActions(
    {
        [INITIALIZE_FORM]: state => initialState,
        [ONCHANGE_INPUT]: (state, { payload: { name, value }}) => ({
            ...state,
            inputs: {
                ...state.inputs,
                [name]: value,
            }
        }),
        [REGISTER_SUCCESS]: (state, { payload: registerSuccess }) => ({
            ...state,
            registerSuccess,
            registerError: null,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            registerError: error,
        })
    },
    initialState
);

export default registerReducer;