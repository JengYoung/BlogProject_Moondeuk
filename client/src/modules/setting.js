import { createAction, handleActions } from 'redux-actions';

const SET_THEME = 'setting/SET_THEME';
export const setTheme = createAction(SET_THEME, theme => theme);

const initialState = {
    theme: 'light',
}

export function* settingSaga() {
    yield;
}

const settingReducer = handleActions({
    [SET_THEME]: (state, { payload: theme }) => ({
        ...state,
        theme,
    })
}, initialState);

export default settingReducer;