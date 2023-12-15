import { MSection } from '../../shared/Layouts/Section/Section';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
import styles from './Photographer.module.scss';
import image from './../../assets/image-2.webp';
import { motion } from 'framer-motion';

const imageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: custom * 1.5 },
  }),
};
const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
};

const Photographer = () => {
  return (
    <MSection
      classNames="about-photographer"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.content}>
        <motion.div
          className={styles.photo}
          custom={1}
          variants={imageAnimation}
        >
          <img src={image} alt="photographer-photo" />
        </motion.div>

        <motion.div className={styles.info} custom={1} variants={textAnimation}>
          <motion.h3
            custom={2}
            variants={textAnimation}
            className={styles.name}
          >
            Александра Ахраменко
          </motion.h3>
          <motion.p
            custom={3}
            variants={textAnimation}
            className={styles.message}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem
            quas ullam voluptates quo quidem quos excepturi culpa, doloribus
            quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui culpa nihil delectus accusamus, mollitia officiis minus dolorum
            nobis illo molestiae quia velit quos rerum, cum commodi! Reiciendis
            quis iste esse.
          </motion.p>
          <MyButtonLink path="/about" text="подробнее" />
        </motion.div>
      </div>
    </MSection>
  );
};

export default Photographer;
