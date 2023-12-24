import styles from './Process.module.scss';
import ProcessCards from '../../entities/ProcessCard/ProcessCard';
import { motion } from 'framer-motion';
import { tilesAnimation } from '../../shared/Animations/animations';

const Process = () => {
  return (
    <motion.div className={styles.process} custom={4} variants={tilesAnimation}>
      <h3 className="title">Как проходит процесс фотосъемки</h3>
      <div className={styles.steps}>
        <ProcessCards />
      </div>
    </motion.div>
  );
};

export default Process;
