import { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../components/auth/AuthContext';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { AuthDataType } from '../types/types';
import db from '../utils/db.json';

const Login = () => {
  const { user, error, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  const navigate = useNavigate();
  const location: any = useLocation();
  const auth = useContext(AuthContext);

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const remember = formData.get('check') as string;

    const authData: AuthDataType = {
      user: username,
      pass: password,
      remember: remember === 'on' ? true : false,
    };

    auth.signin(authData, () => {
      navigate(from, { replace: true });
    });
  };

  const userIndex = db.users.findIndex(
    (item) => item.hash === localStorage.getItem('sid')
  );

  useEffect(() => {
    if (userIndex !== -1) {
      const authData = {
        user: db.users[userIndex].username,
        pass: db.users[userIndex].password,
        remember: true,
      };
      auth.signin(authData, () => {
        navigate(from, { replace: true });
      });
    }
  }, [userIndex]);
  return (
    <section>
      <h1>Авторизация</h1>
      {isLoading || userIndex !== -1 ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputUsername" className="form-label">
              Логин
            </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="nickname"
              name="username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              className={`form-control ${error !== '' && 'is-invalid'}`}
              id="inputPassword"
              placeholder=""
              name="password"
              required
            />
            <div id="validationServer" className="invalid-feedback">
              {error}
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
              name="check"
            />
            <label className="form-check-label" htmlFor="check">
              Запомнить меня
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </form>
      )}
    </section>
  );
};

export default Login;
