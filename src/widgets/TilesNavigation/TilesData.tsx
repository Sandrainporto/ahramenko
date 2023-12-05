import aboutMe from './../../assets/tiles/about-me.webp';
import loveStory from './../../assets/tiles/love-story.webp';
import home from './../../assets/tiles/home.webp';
import contacts from './../../assets/tiles/contacts.webp';
import testimonials from './../../assets/tiles/testimonials.webp';
import family from './../../assets/tiles/family.webp';

interface Tiles {
  path: string;
  title: string;
  background: string;
  positionChanged?: boolean;

  modifier?: string;
}

export const tilesData: Tiles[] = [
  {
    path: '/about-me',
    title: 'Обо мне',
    background: aboutMe,
    positionChanged: true,
  },
  { path: '/home-sessions', title: 'Домашние', background: home },
  {
    path: '/love-story',
    title: 'Love Story',
    background: loveStory,
    modifier: 'item_big',
  },
  {
    path: '/family',
    title: 'Семейные',
    background: family,
    modifier: 'item_big',
    positionChanged: true,
  },
  {
    path: '/testimonials',
    title: 'Отзывы',
    background: testimonials,
  },
  {
    path: '/contacts',
    title: 'Контакты',
    background: contacts,
  },
];
