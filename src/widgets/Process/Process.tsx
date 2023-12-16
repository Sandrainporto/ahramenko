import styles from './Process.module.scss';
import ProcessCards from '../../entities/ProcessCard/ProcessCard';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';

const Process = () => {
  return (
    <motion.div
      className={styles.process}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h3 custom={2} variants={textAnimationUpDown} className="title">
        Как проходит процесс фотосъемки
      </motion.h3>
      <div className={styles.steps}>
        <ProcessCards />
      </div>
    </motion.div>
  );
};

export default Process;
