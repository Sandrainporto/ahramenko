import styles from './App.module.css';
import Slider from '../widgets/Slider/Slider';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Slider />
    </div>
  );
};

export default App;
