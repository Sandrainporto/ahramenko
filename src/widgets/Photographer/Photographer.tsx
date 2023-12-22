import { MSection } from '../../shared/Layouts/Section/Section';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
import styles from './Photographer.module.scss';
import image from './../../assets/content-images/image-main.webp';
import { motion } from 'framer-motion';
import { textAnimationRight } from '../../shared/Animations/animations';

const Photographer = () => {
  return (
    <MSection
      classNames="about-photographer"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.3, once: true }}
    >
      <div className={styles.content}>
        <div className={styles.photo}>
          <img src={image} alt="photographer-photo" />
        </div>
        <motion.div
          className={styles.info}
          custom={1}
          variants={textAnimationRight}
        >
          <h3 className={styles.name}>Александра Ахраменко</h3>
          <p className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem
            quas ullam voluptates quo quidem quos excepturi culpa, doloribus
            quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui culpa nihil delectus accusamus, mollitia officiis minus dolorum
            nobis illo molestiae quia velit quos rerum, cum commodi! Reiciendis
            quis iste esse.
          </p>
          <MyButtonLink path="/about" text="подробнее" />
        </motion.div>
      </div>
    </MSection>
  );
};

export default Photographer;
