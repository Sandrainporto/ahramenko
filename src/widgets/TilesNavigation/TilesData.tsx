import colored from './../../assets/tiles/colored.jpg';
import blackWhite from './../../assets/tiles/black-white.jpg';


interface Tiles {
  path: string;
  title: string;
  background: string;
  modifier?: string;
}


export const tilesData: Tiles[] = [
  { path: '/about-me', title: 'Обо мне', background: colored },
  { path: '/', title: 'Домашние', background: colored },
  {
    path: '/portfolio',
    title: 'Love Story',
    background: colored,
    modifier: 'item_big',
  },
  {
    path: '/services',
    title: 'Семейные',
    background: blackWhite,
    modifier: 'item_big',
  },
  {
    path: '/testimonials',
    title: 'Отзывы',
    background: colored,
  },
  {
    path: '/contacts',
    title: 'Контакты',
    background: blackWhite,
  },
];
