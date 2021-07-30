import { createAction, handleActions } from 'redux-actions';

const GET_PROGRESSBAR_WIDTH = 'util/PROGRESS_WIDTH';

export const getProgressWidth = createAction(progressBarWidth => progressBarWidth);

const initialState = {
    progressBarWidth: 0
};

export function* utilSaga() {
    yield;
}


const utilReducer = handleActions({
    [GET_PROGRESSBAR_WIDTH]: (state, { payload: progressBarWidth }) => ({
        ...state,
        progressBarWidth
    })
}, initialState)

export default utilReducer;