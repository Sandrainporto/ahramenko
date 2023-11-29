import styles from './Icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

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
        {textType ? 'Instagram' : ''}
      </a>
      <a
        className={textType ? styles.icon_text : styles.icon}
        href="https://t.me/AlBo_9"
      >
        <FontAwesomeIcon
          icon={faTelegram}
          style={{ color: '#6e6e6e', fontSize: '28' }}
        />
        {textType ? 'Telegram' : ''}
      </a>
    </div>
  );
};

export default Icons;
