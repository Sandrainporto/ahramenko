import styles from './ProcessCard.module.scss';
import { process } from './Data';

const ProcessCard = () => {
  return (
    <>
      {process.map((process) => (
        <div key={process.heading} className={styles.item}>
          <img className={styles.icon} src={process.icon} />
          <p className={styles.heading}>
            <strong>{process.heading}</strong>
          </p>
          <div className={styles.description}>{process.description} </div>
        </div>
      ))}
    </>
  );
};

export default ProcessCard;
