import Photographer from '../../widgets/Photographer/Photographer';
import Slider from '../../widgets/Slider/Slider';
import Tiles from '../../widgets/TilesNavigation/Tiles';
import styles from './_Main.module.scss';

const Main = () => {
  return (
    <>
      <Slider />
      <main className={styles.main}>
        <Tiles />
        <Photographer />
      </main>
    </>
  );
};

export default Main;
