import { Route } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={MainPage} path={['/@:username', '/']} exact/>
      <Route component={RegisterPage} path='/register' />
      <Route component={LoginPage} path='/login' />
      <Route component={WritePage} path='/write' />
    </>
  );
}

export default App;
