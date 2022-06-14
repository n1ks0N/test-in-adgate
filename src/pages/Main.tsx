const Main = () => {
  return (
    <section>
      <h1>Тестовое задание в AdGate</h1>
      <h3>Стек: React, Redux, TypeScript, WebPack</h3>
      <h4>Фичи</h4>
      <ul>
        <li>Библиотеки: Bootstrap, Redux Toolkit</li>
        <li>API: axios, newsAPI</li>
        <li>Линтеры: ESLint + Prettier + Husky</li>
      </ul>
      <h4>Описание</h4>
      <p>
        Использовал больше технологий для тестового задания, чтобы
        продемонстрировать навыки.
        <br />
        Настроил WebPack, сделал фейковую авторизацию и использовал newsAPI для
        вывода новостей.
      </p>
      <p>
        Вместо или совместно с Bootstrap можно использовать styled-components.
        <br />
        На странице "Новости" можно сделать бесконечную подгрузку новостей при
        скроле.
        <br />
        Для компонентной базы можно использовать Storybook, а также каждый input и другие заполняемые поля рендерить каждый раз после изменения на один символ.
      </p>
    </section>
  );
};

export default Main;
