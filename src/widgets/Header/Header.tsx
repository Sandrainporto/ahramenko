import Navigation from '../../entities/Navigation/Navigation';
import styles from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation state={burgerState} setState={setBurgerState} />
        <div
          className={burgerState ? styles.burger_active : styles.burger}
          onClick={() => setBurgerState(!burgerState)}
        >
          {burgerState ? '✖' : 'Меню'}
        </div>
      </div>
    </header>
  );
};

export default Header;
