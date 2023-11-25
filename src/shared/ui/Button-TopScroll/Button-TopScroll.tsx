import styles from './Button-TopScroll.module.scss';
import logo from './../../../assets/logo-dark.png';

const ButtonTopScroll = () => {
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={styles.button}>
      <img src={logo} alt="website-logo" onClick={handlerScrollUp} />↑
    </div>
  );
};

export default ButtonTopScroll;
