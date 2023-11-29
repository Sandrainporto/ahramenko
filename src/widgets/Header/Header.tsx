import Navigation from '../../entities/Navigation/Navigation';
import styles from './Header.module.scss';

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
      </div>
    </header>
  );
};

export default Header;
