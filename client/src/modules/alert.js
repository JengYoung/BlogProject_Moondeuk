import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import alertAPI from '../lib/routes/alert/alert';
import { takeLatest } from 'redux-saga/effects';
import checkAlertAPI from '../lib/routes/alert/checkAlert';

/* create alert action types */ 
const ALERT = `alert/ALERT`;
const [ ALERT_SUCCESS, ALERT_FAILURE ] = createActionTypes(ALERT);
const CHECK_ALERT = `alert/CHECK_ALERT`;
const [ CHECK_ALERT_SUCCESS, CHECK_ALERT_FAILURE ] = createActionTypes(CHECK_ALERT);

/* create alert aciton creator */ 
export const alertUser = createAction(ALERT, params => params);
export const checkAlertUser = createAction(CHECK_ALERT);

/* create customized saga */ 
const alertUserSaga = createSaga(ALERT, alertAPI);
const checkAlertUserSaga = createSaga(CHECK_ALERT, checkAlertAPI);

/* create alert saga */ 
export function* alertSaga() {
    yield takeLatest(ALERT, alertUserSaga);
    yield takeLatest(CHECK_ALERT, checkAlertUserSaga);
};

const intialState = {
    alert: null, // for check if alert succeed or not 
    alerts: [], // for checkAlert (to import user's alerts)
    alertError: null, // for error checking
    alertsError: null,
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
    }),
    [CHECK_ALERT_SUCCESS]: (state, { payload: alerts }) => ({
        ...state,
        alerts,
        alertsError: null,
    }),
    [CHECK_ALERT_FAILURE]: (state, { payload: error}) => ({
        ...state,
        alertsError: error,
    })
}, intialState);

export default alertReducer;