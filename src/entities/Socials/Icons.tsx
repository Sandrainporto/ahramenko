import styles from './Icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

type IconsProps = {
  textType?: boolean;
};

const Icons = ({ textType }: IconsProps) => {
  return (
    <div className={textType ? styles.icons_text : styles.icons}>
      <a
        className={textType ? styles.icon_text : styles.icon}
        href="tel:+375336253140"
      >
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: '#6e6e6e', fontSize: '23' }}
        />
        {/* <img
          width="30"
          height="30"
          src="https://img.icons8.com/glyph-neue/35/6e6e6e/phone.png"
          alt="phone"
        /> */}
        {textType ? 'Позвонить' : ''}
      </a>
      <a
        className={textType ? styles.icon_text : styles.icon}
        href="https://www.instagram.com/sandraahramenko/"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: '#6e6e6e', fontSize: '28' }}
        />
        {/* <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios/35/6e6e6e/instagram-new--v1.png"
          alt="instagram-new--v1"
        /> */}
        {textType ? 'Instagram' : ''}
      </a>
      <a
        className={textType ? styles.icon_text : styles.icon}
        href="mailto:#&body=Запись на фотосессию"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ color: '#6e6e6e', fontSize: '28' }}
        />
        {/* <img
          width="30"
          height="30"
          src="https://img.icons8.com/parakeet-line/48/6e6e6e/new-post.png"
          alt="new-post"
        /> */}
        {textType ? 'Написать на почту' : ''}
      </a>
    </div>
  );
};

export default Icons;
