import { Route } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Route component={MainPage} path={['/@:username', '/']} exact/>
      <Route component={RegisterPage} path='/register' />
      <Route component={LoginPage} path='/login' />
    </>
  );
}

export default App;
