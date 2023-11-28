import Photographer from '../../widgets/Photographer/Photographer';
import Slider from '../../widgets/Slider/Slider';
import Tiles from '../../widgets/TilesNavigation/Tiles';

const Main = () => {
  return (
    <>
      <Slider />
      <main className="main">
        <Tiles />
        <Photographer />
      </main>
    </>
  );
};

export default Main;
