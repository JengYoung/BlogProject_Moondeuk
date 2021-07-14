import React from 'react';
import { Route } from 'react-router';
import GlobalStyles from './lib/styles/GlobalStyles';
import DiaryPage from './pages/DiaryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Route component={MainPage} path='/' exact/>
      <Route component={UserPage} path='/@:authorId' />
      <Route component={RegisterPage} path='/register' />
      <Route component={LoginPage} path='/login' />
      <Route component={WritePage} path={['/write/@:authorId/:diaryId', '/write']} />
      <Route component={DiaryPage} path='/@:authorId/:diaryId' />
    </React.Fragment>
  );
}

export default App;
