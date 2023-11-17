import { useState } from 'react';
import { SlideTypes } from '../../utils/sliderImages';
import Slide from '../Slide/Slide';
import styles from './MainSlider.module.css';

type MainSliderProps = {
  slides: SlideTypes[];
};

const MainSlider = ({ slides }: MainSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  function showPrevSlide() {
    const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  }
  function showNextSlide() {
    const newIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.prev} onClick={showPrevSlide}></div>
        <Slide slides={slides} slideIndex={slideIndex} />
        <div className={styles.next} onClick={showNextSlide}></div>
      </div>
    </div>
  );
};

export default MainSlider;
