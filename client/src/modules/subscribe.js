import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import subscribeAPI from '../lib/routes/subscribe/subscribe';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../lib/createSaga';
import checkSubscribeAPI from '../lib/routes/subscribe/checkSubscribe';
/* create Action types */ 
const SUBSCRIBE = 'subscribe/SUBSCRIBE';
const [ SUBSCRIBE_SUCCESS, SUBSCRIBE_FAILURE ] = createActionTypes(SUBSCRIBE);

/* CHECK_SUBSCRIBE = 화면에 렌더링 될 때 먼저 기존 구독 여부를 가져오는 액션 */ 
const CHECK_SUBSCRIBE = 'subscribe/CHECK_SUBSCRIBE';
const [ CHECK_SUBSCRIBE_SUCCESS, CHECK_SUBSCRIBE_FAILURE ] = createActionTypes(CHECK_SUBSCRIBE);

/* create Action Creator */ 
export const subscribeUser = createAction(SUBSCRIBE, ({subscribeTo, subscribedFrom}) => ({
    subscribeTo,
    subscribedFrom,
}));

export const checkSubscribe = createAction(CHECK_SUBSCRIBE, ({ subscribeTo, subscribedFrom }) => ({
    subscribeTo,
    subscribedFrom,
}));

/* create Action Saga */ 
const subscribeUserSaga = createSaga(SUBSCRIBE, subscribeAPI);
const checkSubscribeUserSaga = createSaga(CHECK_SUBSCRIBE, checkSubscribeAPI);
export function* subscribeSaga() {
    yield takeLatest(SUBSCRIBE, subscribeUserSaga);
    yield takeLatest(CHECK_SUBSCRIBE, checkSubscribeUserSaga);
}

const initialState = {
    subscribeToList: [], // user's following neighbor list
    subscribedFromList: [], // user's followed neighbor list
    subscribe: null,
    subscribeError: null,
}

const subscribeReducer = handleActions({
    [SUBSCRIBE_SUCCESS]: (state, { payload: subscribe }) => ({
        ...state,
        subscribe,
        subscribeError: null,
    }),
    [SUBSCRIBE_FAILURE]: (state, { payload: subscribeError }) => ({
        ...state,
        subscribeError,
    }),
    [CHECK_SUBSCRIBE_SUCCESS]: (state, { payload: subscribe}) => ({
        ...state,
        subscribe,
        subscribeError: null,
    }),
    [SUBSCRIBE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        subscribeError: error,
    })
}, initialState);

export default subscribeReducer;