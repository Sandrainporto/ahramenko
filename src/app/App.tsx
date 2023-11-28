import Header from '../widgets/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';
// import Contacts from '../pages/Contacts.tsx';
import Footer from '../widgets/Footer/Footer.tsx';
import Portfolio from '../pages/Portfolio/Portfolio.tsx';
import './App.scss';

const App = () => {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/ahramenko/'}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/family" element={<Portfolio />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
