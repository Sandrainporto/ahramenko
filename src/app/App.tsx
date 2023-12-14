import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Error from '../pages/Error/Error';
import Portfolio from '../pages/Portfolio/Portfolio.tsx';
import './App.scss';
import Services from '../pages/Services/Services.tsx';
import AboutMe from '../pages/About-me/About-me.tsx';
import ContactsPage from '../pages/ContactsPage/ContactsPage.tsx';
import TestimonialsPage from '../pages/Testimonials/Testimonials.tsx';
import Layout from '../shared/Layouts/Layout/Layout.tsx';

const App = () => {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/ahramenko/'}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="family" element={<Portfolio />} />
          <Route path="love-story" element={<Portfolio />} />
          <Route path="home-sessions" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
