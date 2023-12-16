import { MSection } from '../../shared/Layouts/Section/Section';
import { MButtonLink } from '../../shared/ui/Button-Link/ButtonLink';
import styles from './Photographer.module.scss';
import image from './../../assets/content-images/image-main.webp';
import { motion } from 'framer-motion';
import {
  imageAnimation,
  textAnimationRight,
} from '../../shared/Animations/animations';

const Photographer = () => {
  return (
    <MSection
      classNames="about-photographer"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.5, once: true }}
    >
      <div className={styles.content}>
        <motion.div
          className={styles.photo}
          custom={1}
          variants={imageAnimation}
        >
          <img src={image} alt="photographer-photo" />
        </motion.div>

        <motion.div
          className={styles.info}
          custom={1}
          variants={textAnimationRight}
        >
          <motion.h3
            custom={2}
            variants={textAnimationRight}
            className={styles.name}
          >
            Александра Ахраменко
          </motion.h3>
          <motion.p
            custom={3}
            variants={textAnimationRight}
            className={styles.message}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem
            quas ullam voluptates quo quidem quos excepturi culpa, doloribus
            quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui culpa nihil delectus accusamus, mollitia officiis minus dolorum
            nobis illo molestiae quia velit quos rerum, cum commodi! Reiciendis
            quis iste esse.
          </motion.p>
          <MButtonLink
            path="/about"
            text="подробнее"
            custom={2}
            variants={imageAnimation}
          />
        </motion.div>
      </div>
    </MSection>
  );
};

export default Photographer;
