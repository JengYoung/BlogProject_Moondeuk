import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import rootReducer, { rootSaga } from './modules/index';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import getItemFromLocalStorage from './lib/getItemFromLocalStorage';
import { check, tempSetUser } from './modules/user';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));


/* user check for maintaining Login status */
const userCheck = () => {
  console.log('유저 체크 중입니다.')
  const user = getItemFromLocalStorage('user');
  if (!user) return;
  console.log('리턴되지 않았습니다.');
  try {
    store.dispatch(tempSetUser());
    store.dispatch(check());
  } catch(e) {
    console.error('LocalStorage ERROR occured');
  }
}

sagaMiddleware.run(rootSaga);
userCheck();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
