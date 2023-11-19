import './App.css';
import { slides } from './utils/sliderImages';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <div className="wrapper">
      <Slider slides={slides} />
    </div>
  );
};

export default App;
