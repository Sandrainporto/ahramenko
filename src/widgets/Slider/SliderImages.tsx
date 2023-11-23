import image1 from './../../assets/image-1.jpg';
import image2 from './../../assets/image-2.jpg';
import image3 from './../../assets/image-3.jpg';
import image4 from './../../assets/image-4.jpg';
import image5 from './../../assets/image-5.jpg';

export type SlideTypes = {
  title: string;
  url: string;
};

export const slides: SlideTypes[] = [
  { title: 'Beach', url: image1 },
  { title: 'Beach2', url: image2 },
  { title: 'Beach3', url: image3 },
  { title: 'Beach4', url: image4 },
  { title: 'Beach5', url: image5 },
];
