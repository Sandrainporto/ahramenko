// import styles from './App.module.scss';
// import Slider from '../widgets/Slider/Slider';
import Header from '../widgets/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Error />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
