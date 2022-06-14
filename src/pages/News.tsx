import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchNews } from '../reducers/actionCreators';
import './News.css';

const News = () => {
  const dispatch = useAppDispatch();
  const { news, error, isLoading } = useAppSelector(
    (state) => state.newsReducer
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <section>
      <h1>Новости</h1>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error !== '' ? (
        <div>
          <h3>Упс, ошибка :(</h3>
          <h4>Попробуйте, пожалуйста, позже</h4>
          <p>{error}</p>
        </div>
      ) : (
        <div className="news-wrapper">
          {news.map((item, i) => (
            <div key={i} className="news-wrapper__item">
              <h3>{item.title}</h3>
              <img src={item.urlToImage} className="news-wrapper__image" />
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
              <p>Автор: {item.author}</p>
              <a href={item.url} target="_blank">
                Подробнее
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default News;
