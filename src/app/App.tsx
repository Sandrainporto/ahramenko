import Header from '../widgets/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';
import Contacts from '../pages/Contacts.tsx';
import Footer from '../widgets/Footer/Footer.tsx';

const App = () => {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/ahramenko/'}>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
