import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Slider.scss';
import { slides } from './SliderImages';

SwiperCore.use([Navigation, Autoplay, EffectFade]);

const Slider = () => {
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
            className="slide"
            src={slide.url}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;