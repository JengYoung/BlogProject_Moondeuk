import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import alertAPI from '../lib/routes/alert/alert';
import { takeLatest } from 'redux-saga/effects';

/* create alert action types */ 
const ALERT = `alert/ALERT`;
const [ ALERT_SUCCESS, ALERT_FAILURE ] = createActionTypes(ALERT);

/* create alert aciton creator */ 
export const alertUser = createAction(ALERT, params => params);

/* create customized saga */ 
const alertUserSaga = createSaga(ALERT, alertAPI);

/* create alert saga */ 
export function* alertSaga() {
    yield takeLatest(ALERT, alertUserSaga);
};

const intialState = {
    alert: null, // for check if alert succeed or not 
    alerts: [], // for checkAlert (to import user's alerts)
    alertError: null, // for error checking
};

const alertReducer = handleActions({
    [ALERT_SUCCESS]: (state, { payload: alert }) => ({
        ...state,
        alert,
        alertError: null,
    }),
    [ALERT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        alertError: error,
    })
}, intialState);

export default alertReducer;