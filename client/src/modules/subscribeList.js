import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import subscribeListAPI from '../lib/routes/subscribe/subscribeList';
import { takeLatest } from 'redux-saga/effects';
import subscribedListAPI from '../lib/routes/subscribe/subscribedList';

/* 
    create Action Types
    INITIALIZE_SUBSCRIBE: 해당 페이지를 구독하는 리스트 상태 초기화 
    SUBSCRIBE_LIST: 해당 유저가 구독하는 유저 리스트를 불러옴.
    SUBSCRIBED_LIST: 해당 유저를 구독하는 유저 리스트를 불러옴.
*/ 

const INITIALIZE_SUBSCRIBE = 'subscribeList/INITIALIZE_SUBSCRIBE';
const SUBSCRIBE_LIST = 'subscribeList/SUBSCRIBE_LIST';
const [ SUBSCRIBE_LIST_SUCCESS, SUBSCRIBE_LIST_FAILURE ] = createActionTypes(SUBSCRIBE_LIST);
const SUBSCRIBED_LIST = 'subscribeList/SUBSCRIBED_LIST';
const [ SUBSCRIBED_LIST_SUCCESS, SUBSCRIBED_LIST_FAILURE ] = createActionTypes(SUBSCRIBED_LIST);


export const initializeSubscribe = createAction(INITIALIZE_SUBSCRIBE);
export const getSubscribeList = createAction(SUBSCRIBE_LIST, subscribeList => subscribeList);
export const getSubsribedList = createAction(SUBSCRIBED_LIST, subscribedList => subscribedList);

const getSubscribeListSaga = createSaga(SUBSCRIBE_LIST, subscribeListAPI);
const getSubscribedListSaga = createSaga(SUBSCRIBED_LIST, subscribedListAPI);

export function* subscribeListSaga() {
    yield takeLatest(SUBSCRIBE_LIST, getSubscribeListSaga);
    yield takeLatest(SUBSCRIBED_LIST, getSubscribedListSaga);
}

const initialState = { 
    subscribeList: {
        subscribeToList: null,
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
        subscribeList
    }),
    [SUBSCRIBE_LIST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        subscribeError: error,
    }),
    [SUBSCRIBED_LIST_SUCCESS]: (state, { payload: subscribedList }) => ({
        ...state,
        subscribedList
    }),
    [SUBSCRIBED_LIST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        subscribeError: error,
    }),
}, initialState)

export default subscribeListReducer;