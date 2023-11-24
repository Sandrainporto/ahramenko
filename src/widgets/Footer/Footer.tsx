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
        <Link to="/contacts" className={styles.contacts}>
          Контакты
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
