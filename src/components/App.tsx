import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </main>
  );
};
export default App;
