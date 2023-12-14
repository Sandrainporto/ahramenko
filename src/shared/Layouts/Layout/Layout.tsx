import { Outlet } from 'react-router-dom';
import Footer from '../../../widgets/Footer/Footer';
import Header from '../../../widgets/Header/Header';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
