import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Slider.scss';
import { slides } from './SliderImages';
import { useMediaQuery } from 'react-responsive';

SwiperCore.use([Navigation, Autoplay, EffectFade]);

const Slider = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1281px)',
  });
  const isSmallLaptop = useMediaQuery({
    query: '(min-device-width: 768px) and (max-width: 1280px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-device-width: 414px) and (max-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 414px)',
  });

  let slidesToShow;
  if (isDesktop) {
    slidesToShow = slides.desk;
  } else if (isSmallLaptop) {
    slidesToShow = slides.lapt;
  } else if (isTablet) {
    slidesToShow = slides.tablet;
  } else if (isMobile) {
    slidesToShow = slides.mobile;
  }
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
      {slidesToShow?.map((slide, index) => (
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
