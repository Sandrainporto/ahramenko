import SwiperCore from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import { SlideTypes } from '../../utils/sliderImages';
import styles from './Slider.module.css';

SwiperCore.use([Navigation, Autoplay, EffectFade]);

type MainSliderProps = {
  slides: SlideTypes[];
};

const Slider = ({ slides }: MainSliderProps) => {
  console.log('render');
  return (
    <Swiper
      slidesPerView={1}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      navigation
      autoplay={{ delay: 4000 }}
      speed={2000}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            key={slide.title}
            className={styles.slide}
            src={slide.url}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
