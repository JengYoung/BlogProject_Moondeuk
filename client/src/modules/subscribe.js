import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import subscribeAPI from '../lib/routes/subscribe/subscribe';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../lib/createSaga';
/* create Action types */ 
const SUBSCRIBE = 'subscribe/SUBSCRIBE';
const [ SUBSCRIBE_SUCCESS, SUBSCRIBE_FAILURE ] = createActionTypes(SUBSCRIBE);

/* create Action Creator */ 
export const subscribeUser = createAction(SUBSCRIBE, ({subscribeTo, subscribedFrom}) => ({
    subscribeTo,
    subscribedFrom,
}))

/* create Action Saga */ 
const subscribeUserSaga = createSaga(SUBSCRIBE, subscribeAPI);

export function* subscribeSaga() {
    yield takeLatest(SUBSCRIBE, subscribeUserSaga);
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
}, initialState);

export default subscribeReducer;