import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import subscribeListAPI from '../lib/routes/subscribe/subscribeList';
import { takeLatest } from 'redux-saga/effects';

/* 
    create Action Types
    INITIALIZE_SUBSCRIBE: 해당 페이지를 구독하는 리스트 상태 초기화 
    SUBSCRIBE_LIST: 해당 유저가 구독하는 유저 리스트를 불러옴.
    SUBSCRIBED_LIST: 해당 유저를 구독하는 유저 리스트를 불러옴.
*/ 

const INITIALIZE_SUBSCRIBE = 'subscribeList/INITIALIZE_SUBSCRIBE';
const SUBSCRIBE_LIST = 'subscribeList/SUBSCRIBE_LIST';
const [ SUBSCRIBE_LIST_SUCCESS, SUBSCRIBE_LIST_FAILURE ] = createActionTypes(SUBSCRIBE_LIST);

export const initializeSubscribe = createAction(INITIALIZE_SUBSCRIBE);
export const getSubscribeList = createAction(SUBSCRIBE_LIST);

const getSubscribeListSaga = createSaga(SUBSCRIBE_LIST, subscribeListAPI);

export function* subscribeListSaga() {
    yield takeLatest(SUBSCRIBE_LIST, getSubscribeListSaga);
}

const initialState = { 
    subscribeList: {
        subscribeTo: null,
        count: null,
    },
    subscribedList: {
        subscribedFrom: null,
        count: null,
    },
    subscribeError: null,
};

const subscribeListReducer = handleActions({
    [INITIALIZE_SUBSCRIBE]: state => initialState,
    [SUBSCRIBE_LIST_SUCCESS]: (state, { payload: subscribeList }) => ({
        ...state,
        subscribeList,
    }),
    [SUBSCRIBE_LIST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        subscribeError: error,
    }),
}, initialState)

export default subscribeListReducer;