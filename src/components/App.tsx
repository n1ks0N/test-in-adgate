import { Routes, Route, Link } from 'react-router-dom';
import Main from '../pages/Main';
import News from '../pages/News';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Auth from './auth/AuthWrapper';
import AuthProvider from './auth/AuthProvider';
import './App.css';
import AuthWrapper from './auth/AuthWrapper';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <header>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link to="/">
                <span className="navbar-brand">AdGate</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">Главная</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/news">Новости</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile">Профиль</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <AuthWrapper>
                  <Profile />
                </AuthWrapper>
              }
            />
          </Routes>
        </main>
        <footer>
          <p>Разработал: Никита Громяков</p>
          <ul className="footer__navbar">
            <a
              href="https://github.com/n1ks0N"
              target="_blank"
              className="footer__link"
            >
              <li>GitHub</li>
            </a>
            <a
              href="https://hh.ru/resume/56a02d47ff074268210039ed1f33324f424d53"
              target="_blank"
              className="footer__link"
            >
              <li>HeadHunter</li>
            </a>
            <a
              href="https://www.linkedin.com/in/niks-on/"
              target="_blank"
              className="footer__link"
            >
              <li>LinkedIn</li>
            </a>
            <a
              href="https://kwork.ru/user/n1ks_on"
              target="_blank"
              className="footer__link"
            >
              <li>Kwork</li>
            </a>
          </ul>
        </footer>
      </AuthProvider>
    </div>
  );
};
export default App;
