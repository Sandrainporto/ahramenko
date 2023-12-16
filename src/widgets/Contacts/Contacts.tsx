import styles from './Contacts.module.scss';
import Icons from '../../entities/SocialIcons/Icons';
import { MSection } from '../../shared/Layouts/Section/Section';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';

const Contacts = () => {
  return (
    <MSection
      classNames="contacts"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.contacts}>
        <motion.h3
          custom={2}
          variants={textAnimationUpDown}
          className={`${styles.title}` + ' ' + 'title'}
        >
          Для записи свяжитесь со мной удобным для Вас способом!
        </motion.h3>
        <div className={styles.socials}>
          <Icons textType={true} />
        </div>
      </div>
    </MSection>
  );
};

export default Contacts;
