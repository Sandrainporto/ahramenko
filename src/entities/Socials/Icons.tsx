import styles from './Icons.module.scss';

const Icons = () => {
  return (
    <div className={styles.icons}>
      <a className={styles.icon} href="tel:+375336253140">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/glyph-neue/35/6e6e6e/phone.png"
          alt="phone"
        />
      </a>
      <a
        className={styles.icon}
        href="https://www.instagram.com/sandraahramenko/"
      >
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios/35/6e6e6e/instagram-new--v1.png"
          alt="instagram-new--v1"
        />
      </a>
      <a className={styles.icon} href="mailto:#&body=Запись на фотосессию">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/parakeet-line/48/6e6e6e/new-post.png"
          alt="new-post"
        />
      </a>
    </div>
  );
};

export default Icons;
