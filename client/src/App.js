import React from 'react';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './lib/styles/GlobalStyles';
import DiaryPage from './pages/DiaryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import WritePage from './pages/WritePage';
import useTheme from 'lib/hooks/useTheme';
import themeStyles from 'lib/styles/_theme';

function App() {
  // 현재 로컬스토리지에서 정의된 (정의되어 있지 않을 때의) theme을 갖고 옴.
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <ThemeProvider theme={themeStyles[theme]}>
        <GlobalStyles/>
        <Route component={MainPage} path='/' exact/>
        <Route component={UserPage} path='/@:authorId' exact/>
        <Route component={RegisterPage} path='/register' />
        <Route component={LoginPage} path='/login' />
        <Route component={WritePage} path={['/write/@:authorId/:diaryId', '/write']} />
        <Route component={DiaryPage} path='/@:authorId/:diaryId' />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
