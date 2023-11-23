import Photographer from '../../widgets/Photographer/Photographer';
import Slider from '../../widgets/Slider/Slider';
import Tiles from '../../widgets/TilesNavigation/Tiles';
import styles from './_Main.module.scss';

const Main = () => {
  return (
    <>
      <Slider />
      <div className={styles.wrapper}>
        <Tiles />
        <Photographer />
      </div>
    </>
  );
};

export default Main;
