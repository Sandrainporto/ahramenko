import styles from './Icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { contactIconsAnimation } from '../../shared/Animations/animations';
type IconsProps = {
  textType?: boolean;
};

const Icons = ({ textType }: IconsProps) => {
  return (
    <motion.div
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      className={textType ? styles.icons_text : styles.icons}
    >
      <motion.a
        custom={4}
        variants={contactIconsAnimation}
        className={textType ? styles.icon_text : styles.icon}
        href="tel:+375336253140"
      >
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: '#6e6e6e', fontSize: '23' }}
        />
        {textType ? 'Позвонить' : ''}
      </motion.a>
      <motion.a
        custom={5}
        variants={contactIconsAnimation}
        className={textType ? styles.icon_text : styles.icon}
        href="https://www.instagram.com/sandraahramenko/"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: '#6e6e6e', fontSize: '28' }}
        />
        {textType ? 'Instagram' : ''}
      </motion.a>
      <motion.a
        custom={7}
        variants={contactIconsAnimation}
        className={textType ? styles.icon_text : styles.icon}
        href="https://t.me/AlBo_9"
      >
        <FontAwesomeIcon
          icon={faTelegram}
          style={{ color: '#6e6e6e', fontSize: '28' }}
        />
        {textType ? 'Telegram' : ''}
      </motion.a>
    </motion.div>
  );
};

export default Icons;
