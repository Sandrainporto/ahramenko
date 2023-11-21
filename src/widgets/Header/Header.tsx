import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './logo.png';

interface Navigation {
  path: string;
  title: string;
}

const Header = () => {
  const LeftNavigation: Navigation[] = [
    { path: '/', title: 'Главная' },
    { path: '/portfolio', title: 'Портфолио' },
    { path: '/services', title: 'Услуги' },
  ];
  const RightNavigation: Navigation[] = [
    { path: '/about-me', title: 'Обо мне' },
    { path: '/testimonials', title: 'Отзывы' },
    { path: '/contacts', title: 'Контакты' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <ul className={styles.navigation_list}>
            {LeftNavigation.map((link) => (
              <li key={link.title}>
                <NavLink className={styles.navigation_link} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.link}>
            <img src={logo} alt="website-logo" />
          </NavLink>
        </div>
        <div className={styles.navigation}>
          <ul className={styles.navigation_list}>
            {RightNavigation.map((link) => (
              <li key={link.title}>
                <NavLink className={styles.navigation_link} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
