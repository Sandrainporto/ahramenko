import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './ContactsPage.module.scss';
import backgroundDesk from './../../assets/content-images/contacts-back-1500.webp';
import backgroundTablet from './../../assets/content-images/contacts-back-730.webp';
import backgroundMobile from './../../assets/content-images/contacts-back-400.webp';
import Contacts from '../../widgets/Contacts/Contacts';
import { motion } from 'framer-motion';
import {
  textAnimationUpDown,
  imageAnimation,
} from '../../shared/Animations/animations';
import { useMediaQuery } from 'react-responsive';

const ContactsPage = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1281px)',
  });
  const isTabletOrSmallLaptop = useMediaQuery({
    query: '(min-device-width: 414px) and (max-width: 1280px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 414px)',
  });
  return (
    <>
      <MSection
        classNames="thank-you"
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ amount: 0.1, once: true }}
      >
        <div className={styles.content}>
          <motion.div
            custom={0.5}
            variants={imageAnimation}
            className={styles.image}
          >
            {isDesktop && <img src={backgroundDesk} alt="page-background" />}
            {isTabletOrSmallLaptop && (
              <img src={backgroundTablet} alt="page-background" />
            )}{' '}
            {isMobile && <img src={backgroundMobile} alt="page-background" />}
          </motion.div>
          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ amount: 0.2, once: true }}
            className={styles.info}
          >
            <motion.h2
              custom={1}
              variants={textAnimationUpDown}
              className="heading"
            >
              Благодарю, что проявляете интерес к моему творчеству!
            </motion.h2>
            <motion.p
              custom={2}
              variants={textAnimationUpDown}
              className={styles.message}
            >
              Если у Вас возникли вопросы, появилась идея для фотосессии или
              просто хочется обсудить что-то интересное, буду рада пообщаться с
              Вами. Не стесняйтесь звонить или начать общение в одной из
              соцсетей. Я всегда открыта для общения и готова к совместной
              работе!
            </motion.p>
          </motion.div>
        </div>
      </MSection>
      <Contacts />
    </>
  );
};

export default ContactsPage;
