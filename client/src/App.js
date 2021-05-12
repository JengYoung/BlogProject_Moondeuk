import { Route } from 'react-router';
import './App.css';
import DiaryPage from './pages/DiaryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={MainPage} path={['/@:authorId', '/']} exact/>
      <Route component={RegisterPage} path='/register' />
      <Route component={LoginPage} path='/login' />
      <Route component={WritePage} path={['/write/@:authorId/:diaryId', '/write']} />
      <Route component={DiaryPage} path='/@:authorId/:diaryId' />
    </>
  );
}

export default App;
