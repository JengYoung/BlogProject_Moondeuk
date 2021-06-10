import { call, put } from 'redux-saga/effects';
import { loadingFinish, loadingStart } from '../modules/loading';
import createActionTypes from './createActionTypes';

function createSaga(type, request) {
    const [SUCCESS, FAILURE] = createActionTypes(type);
    return function*(action) {
        yield put(loadingStart(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            });
        } catch(e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            })
        }
        yield put(loadingFinish(type));
    }
}

export default createSaga;
