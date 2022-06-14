import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/auth/AuthContext';
import { useAppSelector } from '../hooks/redux';
import './Profile.css';

const Profile = () => {
  const { user, isLoading } = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  return (
    <section>
      <h1>Ваш профиль</h1>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <p>Добро пожаловать, {user || ''}!</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => auth.signout(() => navigate('/login'))}
          >
            Выйти
          </button>
          <div className="resume-wrapper">
            <h3>Краткая информация обо мне</h3>
            <p>
              Веб-разработчик с опытом работы на фрилансе 3+ года. Решаю задачи
              разной сложности: от простых правок верстки до создания сложных
              SPA-приложений на React.
              <br />
              <br />
              Целеустремленный: всегда довожу работу до конца. Мотивированный:
              горю желанием продуктивно работать. Готов решать сложные задачи.
              Всегда нахожу ответы на интересующие вопросы. Умею не только
              организовывать работу самостоятельно, но отлично взаимодействовать
              в команде.
              <br />
              <br />
              Активно изучаю и пишу проекты на стеке: React (+
              styled-components), Redux (+ redux-saga), Firebase. В работе
              использую: HTML, CSS (препроцессоры Sass/SCSS, верстку на
              Flexbox/Grid, библиотеку Bootstrap 5, методологию BEM), JavaScript
              (jQuery, ES6), WebPack, Git, Figma/Zeplin. Есть опыт работы с:
              PHP, MySQL, Docker, Svelte, NodeJS.
              <br />
              <br />
              Имеется портфолио из 50+ выполненных работ:
              <br />- реальные заказы на фрилансе –{' '}
              <a href="https://kwork.ru/user/n1ks_on" target="_blank">
                https://kwork.ru/user/n1ks_on
              </a>
              <br />- проекты на GitHub –{' '}
              <a href="https://github.com/n1ks0N" target="_blank">
                https://github.com/n1ks0N
              </a>
            </p>
            <a
              href="https://hh.ru/resume_converter/%D0%93%D1%80%D0%BE%D0%BC%D1%8F%D0%BA%D0%BE%D0%B2%20%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B0%20%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=56a02d47ff074268210039ed1f33324f424d53&type=pdf&hhtmSource=resume&hhtmFrom=&force-roles=true"
              target="_blank"
            >
              <button type="button" className="btn btn-link">
                Скачать резюме
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
