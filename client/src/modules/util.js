import { createAction, handleActions } from 'redux-actions';

const SET_PROGRESSBAR_WIDTH = 'util/PROGRESS_WIDTH';

export const setProgressBarWidth = createAction(SET_PROGRESSBAR_WIDTH, progressBarWidth => progressBarWidth);

const initialState = {
    progressBarWidth: 0
};

export function* utilSaga() {
    yield;
}


const utilReducer = handleActions({
    [SET_PROGRESSBAR_WIDTH]: (state, { payload: progressBarWidth }) => ({
        ...state,
        progressBarWidth
    })
}, initialState)

export default utilReducer;