import slide1 from './../../assets/slider/slide-1.webp';
import slide2 from './../../assets/slider/slide-2.webp';
import slide3 from './../../assets/slider/slide-3.webp';

export type SlideTypes = {
  title: string;
  url: string;
};

export const slides: SlideTypes[] = [
  { title: 'Slider-slide-1', url: slide1 },
  { title: 'Slider-slide-2', url: slide2 },
  { title: 'Slider-slide-3', url: slide3 },
];
