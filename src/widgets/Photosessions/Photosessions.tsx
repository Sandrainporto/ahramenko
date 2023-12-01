import PhotoTypes from '../../entities/PhotoTypes/PhotoTypes';
import styles from './Photosessions.module.scss';

const Photosessions = () => {
  return (
    <div className={styles.photosession_types}>
      <div className="info">
        <h3 className="title">Виды и направления</h3>
        <div className="description">
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
