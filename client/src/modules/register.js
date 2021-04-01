import { createAction, handleActions } from 'redux-actions';
export const register = createAction();
export const registerReducer = handleActions();
export function* registerSaga() {
    yield;
}
export default registerReducer;