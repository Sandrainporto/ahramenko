import Navigation from '../../entities/Navigation/Navigation';
import styles from './Header.module.scss';
import logo from './../../assets/logo.png';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <header className={isMainPage ? styles.header : styles.headerDefault}>
      <div className={styles.container}>
        <Navigation state={burgerState} setState={setBurgerState} />
        <div
          className={
            burgerState ? styles.burger + ' ' + styles.active : styles.burger
          }
          onClick={() => setBurgerState(!burgerState)}
        >
          {burgerState ? '✖' : 'Меню'}
        </div>
        <img className={styles.logo_tablet} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
