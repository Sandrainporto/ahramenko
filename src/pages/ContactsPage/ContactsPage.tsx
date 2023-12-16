import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './ContactsPage.module.scss';
import background from './../../assets/content-images/slide-1.webp';
import Contacts from '../../widgets/Contacts/Contacts';
import { motion } from 'framer-motion';
import {
  textAnimationUpDown,
  imageAnimation,
} from '../../shared/Animations/animations';

const ContactsPage = () => {
  return (
    <>
      <MSection
        classNames="thank-you"
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={styles.content}>
          <motion.div
            custom={1}
            variants={imageAnimation}
            className={styles.image}
          >
            <img src={background} alt="page-background" />
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
