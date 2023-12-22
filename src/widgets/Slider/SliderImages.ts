import slide1Desktop from './../../assets/slider/desktop/slide-1desktop.webp';
import slide2Desktop from './../../assets/slider/desktop/slide-2desktop.webp';
import slide3Desktop from './../../assets/slider/desktop/slide-3desktop.webp';

import slide1Laptop from './../../assets/slider/laptop/slide-1.webp';
import slide2Laptop from './../../assets/slider/laptop/slide-2.webp';
import slide3Laptop from './../../assets/slider/laptop/slide-3.webp';

import slide1Tablet from './../../assets/slider/tablet/slide-1.webp';
import slide2Tablet from './../../assets/slider/tablet/slide-2.webp';
import slide3Tablet from './../../assets/slider/tablet/slide-3.webp';

import slide1Mobile from './../../assets/slider/mobile/slide-1.webp';
import slide2Mobile from './../../assets/slider/mobile/slide-2.webp';
import slide3Mobile from './../../assets/slider/mobile/slide-3.webp';

type Slide = {
  title: string;
  url: string;
};

type Slides = {
  desk: Slide[];
  lapt: Slide[];
  tablet: Slide[];
  mobile: Slide[];
};

export const slides: Slides = {
  desk: [
    { title: 'Slider-slide-1', url: slide1Desktop },
    { title: 'Slider-slide-2', url: slide2Desktop },
    { title: 'Slider-slide-3', url: slide3Desktop },
  ],
  lapt: [
    { title: 'Slider-slide-1', url: slide1Laptop },
    { title: 'Slider-slide-2', url: slide2Laptop },
    { title: 'Slider-slide-3', url: slide3Laptop },
  ],
  tablet: [
    { title: 'Slider-slide-3', url: slide2Tablet },
    { title: 'Slider-slide-2', url: slide3Tablet },
    { title: 'Slider-slide-3', url: slide1Tablet },
  ],
  mobile: [
    { title: 'Slider-slide-3', url: slide3Mobile },
    { title: 'Slider-slide-2', url: slide2Mobile },
    { title: 'Slider-slide-3', url: slide1Mobile },
  ],
};
