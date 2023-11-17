import { SlideTypes } from '../../utils/sliderImages';
import styles from './../MainSlider/MainSlider.module.css';

type MainSliderProps = {
  slides: SlideTypes[];
  slideIndex: number;
};

const Slide = ({ slides, slideIndex }: MainSliderProps) => {
  return (
    <div className="slides">
      {/* {slides.map((slide) => (
          <img key={slide.title} className={styles.slide} src={slide.url} alt={slide.title} />
      ))} */}
      <img
        key={slides[slideIndex].title}
        className={styles.slide}
        src={slides[slideIndex].url}
        alt={slides[slideIndex].title}
      />
    </div>
  );
};

export default Slide;
