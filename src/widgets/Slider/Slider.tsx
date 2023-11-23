import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

SwiperCore.use([Navigation, Autoplay, EffectFade]);

export type SlideTypes = {
  title: string;
  url: string;
};

const Slider = () => {
  const slides: SlideTypes[] = [
    { title: 'Beach', url: './../../../public/image-1.jpg' },
    { title: 'Beach2', url: './../../../public/image-2.jpg' },
    { title: 'Beach3', url: './../../../public/image-3.jpg' },
    { title: 'Beach4', url: './../../../public/image-4.jpg' },
    { title: 'Beach5', url: './../../../public/image-5.jpg' },
  ];

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
