import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import alertAPI from '../lib/routes/alert/alert';
import { takeLatest } from 'redux-saga/effects';
import checkAlertAPI from '../lib/routes/alert/checkAlert';
import conformAlertAPI from '../lib/routes/alert/conformAlert';

/* create alert action types */ 
const INITIALIZE_ALERT = `alert/INITIALIZE_ALERT`;
const ALERT = `alert/ALERT`;
const [ ALERT_SUCCESS, ALERT_FAILURE ] = createActionTypes(ALERT);
const CHECK_ALERT = `alert/CHECK_ALERT`;
const [ CHECK_ALERT_SUCCESS, CHECK_ALERT_FAILURE ] = createActionTypes(CHECK_ALERT);
const CONFORM_ALERT = `alert/CONFORM_ALERT`
const [ CONFORM_ALERT_SUCCESS, CONFORM_ALERT_FAILURE ] = createActionTypes(CONFORM_ALERT);

/* create alert aciton creator */ 
export const initializeAlert = createAction(INITIALIZE_ALERT);
export const alertUser = createAction(ALERT, params => params);
export const checkAlertUser = createAction(CHECK_ALERT, user_id => user_id);
export const conformAlertUser = createAction(CONFORM_ALERT, user_id => user_id);

/* create customized saga */ 
const alertUserSaga = createSaga(ALERT, alertAPI);
const checkAlertUserSaga = createSaga(CHECK_ALERT, checkAlertAPI);
const conformAlertUserSaga = createSaga(CONFORM_ALERT, conformAlertAPI);

/* create alert saga */ 
export function* alertSaga() {
    yield takeLatest(ALERT, alertUserSaga);
    yield takeLatest(CHECK_ALERT, checkAlertUserSaga);
    yield takeLatest(CONFORM_ALERT, conformAlertUserSaga);
};

const initialState = {
    alert: null, // for check if alert succeed or not 
    alerts: [], // for checkAlert (to import user's alerts)
    alertError: null, // for error checking
    alertsError: null,
};

const alertReducer = handleActions({
    [INITIALIZE_ALERT]: state => initialState,
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
    }),
    [CONFORM_ALERT_SUCCESS]: (state, { payload: alerts }) => ({
        ...state,
        alerts,
        alertsError: null,
    }),
    [CONFORM_ALERT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        alertsError: error,
    })
}, initialState);

export default alertReducer;