import { Routes, Route, Link } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import News from '../pages/News';
import Profile from '../pages/Profile';
import Auth from './auth/Auth';
import AuthProvider from './auth/AuthProvider';
import './App.css';

const App = () => {
  return (
    <div>
      <AuthProvider>
      <header>
        <h1>AdGate</h1>
        <menu>
          <Link to="/">
            <li>Главная</li>
          </Link>
          <Link to="/news">
            <li>Новости</li>
          </Link>
          <Link to="/profile">
            <li>Профиль</li>
          </Link>
        </menu>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <Auth>
                <Profile />
              </Auth>
            }
          />
        </Routes>
      </main>
      </AuthProvider>
    </div>
  );
};
export default App;
