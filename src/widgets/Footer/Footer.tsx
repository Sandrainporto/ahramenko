import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo-dark.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.button}>
          <img src={logo} alt="website-logo" />
        </div>
        <a className={styles.tel} href="tel:+375336253140">
          +375 (33) 625-31-40
        </a>
        <Link to="/contacts" className={styles.contacts}>
          Контакты
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
