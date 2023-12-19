import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './Greetings.module.scss';
import background from './../../assets/content-images/image-main.webp';
import { motion } from 'framer-motion';
import { imageAnimation } from '../../shared/Animations/animations';

const Greetings = () => {
  return (
    <MSection
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      classNames="greeting"
    >
      <div className={styles.content}>
        <motion.img
          custom={0.5}
          variants={imageAnimation}
          src={background}
          alt="background"
        />
        <motion.div
          custom={1}
          variants={imageAnimation}
          className={styles.info}
        >
          <p className={styles.position}>Фотограф</p>
          <h2 className={styles.heading}>Александра Ахраменко</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam vero quia deleniti reiciendis cumque, ducimus maiores harum
            facere incidunt ad earum odit mollitia sit quibusdam eius nemo quod!
            Ipsum.
          </p>
        </motion.div>
      </div>
    </MSection>
  );
};

export default Greetings;
