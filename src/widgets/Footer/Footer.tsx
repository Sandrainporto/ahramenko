import styles from './Footer.module.scss';
import logo from './../../assets/logo-dark.png';
import Icons from '../../entities/Socials/Icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.button}>
          <img src={logo} alt="website-logo" />
        </div>

        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
