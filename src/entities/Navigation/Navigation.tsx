import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}
interface NavigationTypes {
  path: string;
  title: string;
  sublinks?: NavigationTypes[];
}

const Navigation = ({ state, setState }: Props) => {
  const LeftNavigation: NavigationTypes[] = [
    { path: '/', title: 'Главная' },
    {
      path: '/portfolio/*',
      title: 'Портфолио',
      sublinks: [
        { path: '/family', title: 'Семейные' },
        { path: '/love-story', title: 'Love Story' },
        { path: '/home-sessions', title: 'Домашние' },
      ],
    },
    {
      path: '/services',
      title: 'Услуги',
    },
  ];

  const RightNavigation: NavigationTypes[] = [
    { path: '/about-me', title: 'Обо мне' },
    { path: '/testimonials', title: 'Отзывы' },
    { path: '/contacts', title: 'Контакты' },
  ];
  return (
    <nav className={state ? styles.navigation_active : styles.navigation}>
      <ul className={styles.navigation_list}>
        {LeftNavigation.map((link) => (
          <li key={link.title} onClick={() => setState(false)}>
            <NavLink
              className={
                link.sublinks
                  ? `${styles.navigation_link} disabled`
                  : styles.navigation_link
              }
              to={link.path}
            >
              {link.title}
            </NavLink>

            {link.sublinks ? (
              <ul className={styles.sub_list}>
                {link.sublinks.map((sublink) => (
                  <li key={sublink.title} onClick={() => setState(false)}>
                    <NavLink
                      className={styles.navigation_link}
                      to={sublink.path}
                    >
                      {sublink.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>

      <div className={styles.logo}>
        <NavLink to="/" className={styles.link}>
          <img src={logo} alt="website-logo" />
        </NavLink>
      </div>

      <ul className={styles.navigation_list}>
        {RightNavigation.map((link) => (
          <li key={link.title}>
            <NavLink className={styles.navigation_link} to={link.path}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
