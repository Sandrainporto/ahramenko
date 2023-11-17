import React from 'react';

import './App.css';
import { slides } from './utils/sliderImages';
import MainSlider from './components/MainSlider/MainSlider';
const App = () => {
  return (
    <div className="wrapper">
      <MainSlider slides={slides} />
    </div>
  );
};

export default App;
