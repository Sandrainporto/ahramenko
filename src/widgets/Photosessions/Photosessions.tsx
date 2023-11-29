import PhotoTypes from '../../entities/PhotoTypes/PhotoTypes';
import styles from './Photosessions.module.scss';

const Photosessions = () => {
  return (
    <div className={styles.photosession_types}>
      <div className={styles.info}>
        <h3 className={styles.title}>Виды и направления</h3>
        <div className={styles.description}>
          Здесь Вы можете ознакомиться с основными направлениями моей
          деятельности
        </div>
      </div>
      <div className={styles.container}>
        <PhotoTypes />
      </div>
    </div>
  );
};

export default Photosessions;
