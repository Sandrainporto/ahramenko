import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from '../../../widgets/Footer/Footer';
import Header from '../../../widgets/Header/Header';
import Loader from '../../Loader/Loader';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
