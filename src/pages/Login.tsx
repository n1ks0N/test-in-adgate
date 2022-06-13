import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../components/auth/AuthContext';

const Login = () => {
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

    const authData = {
      user: username,
      pass: password,
      remember: remember
    };

    auth.signin(authData, () => {
      navigate(from, { replace: true });
    });
  };
  return (
    <section>
      <h1>Авторизация</h1>
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder=""
            name="password"
          />
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
    </section>
  );
};

export default Login;
