import styles from './Process.module.scss';
import ProcessCards from '../../entities/ProcessCard/ProcessCard';

const Process = () => {
  return (
    <div className={styles.process}>
      <h3 className="title">Как проходит процесс фотосъемки</h3>
      <div className={styles.steps}>
        <ProcessCards />
      </div>
    </div>
  );
};

export default Process;
