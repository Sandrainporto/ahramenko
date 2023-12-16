import PhotoTypes from '../../entities/PhotoTypes/PhotoTypes';
import { MSection } from '../../shared/Layouts/Section/Section';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';
import styles from './Photosessions.module.scss';

const Photosessions = () => {
  return (
    <MSection
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      classNames="types"
    >
      <div className={styles.photosession_types}>
        <div className="info">
          <motion.h2
            custom={1}
            variants={textAnimationUpDown}
            className="heading"
          >
            Виды и направления
          </motion.h2>
          <motion.div
            custom={2}
            variants={textAnimationUpDown}
            className="description"
          >
            Здесь Вы можете ознакомиться с основными направлениями моей
            деятельности
          </motion.div>
        </div>
        <div className={styles.container}>
          <PhotoTypes />
        </div>
      </div>
    </MSection>
  );
};

export default Photosessions;
