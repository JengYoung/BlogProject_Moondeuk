import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';

// slice(1): loading은 시작과 끝만 action dispatch될 예정이므로 2개만 필요하여 생략.
const [ LOADING_START, LOADING_FINISH ] = createActionTypes('loading/LODING',['_START','_FINISH']).slice(1);

// reqAction: payload 액션 생성 함수.
export const loadingStart = createAction(LOADING_START, reqAction => reqAction);
export const loadingFinish = createAction(LOADING_FINISH, reqAction => reqAction);

const initialState = {};
const loadingReducer = handleActions(
    {
        [LOADING_START]: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),
        [LOADING_FINISH]: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState,
);

export default loadingReducer;