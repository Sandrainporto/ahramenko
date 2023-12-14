import './App.scss';
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../shared/Layouts/Layout/Layout.tsx';

const Main = lazy(() => import('../pages/Main/Main.tsx'));
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio.tsx'));
const Services = lazy(() => import('../pages/Services/Services.tsx'));
const AboutMe = lazy(() => import('../pages/About-me/About-me.tsx'));
const TestimonialsPage = lazy(
  () => import('../pages/Testimonials/Testimonials.tsx')
);
const ContactsPage = lazy(
  () => import('../pages/ContactsPage/ContactsPage.tsx')
);
const Error = lazy(() => import('../pages/Error/Error.tsx'));

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
