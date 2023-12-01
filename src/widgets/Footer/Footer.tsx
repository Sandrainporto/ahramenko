import styles from './Footer.module.scss';
import Icons from '../../entities/SocialIcons/Icons';
import ButtonTopScroll from '../../shared/ui/Button-TopScroll/Button-TopScroll';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ButtonTopScroll />

        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
