import aboutMeDesktop from './../../assets/tiles/desktop/about-me.webp';
import aboutMeLaptop from './../../assets/tiles/laptop/about-me.webp';
import aboutMeTablet from './../../assets/tiles/tablet/about-me.webp';
import aboutMeMobile from './../../assets/tiles/mobile/about-me.webp';

import loveStoryDesktop from './../../assets/tiles/desktop/love-story.webp';
import loveStoryLaptop from './../../assets/tiles/laptop/love-story.webp';
import loveStoryTablet from './../../assets/tiles/tablet/love-story.webp';
import loveStoryMobile from './../../assets/tiles/tablet/love-story.webp';

import homeDesktop from './../../assets/tiles/desktop/home.webp';
import homeLaptop from './../../assets/tiles/laptop/home.webp';
import homeTablet from './../../assets/tiles/tablet/home.webp';
import homeMobile from './../../assets/tiles/mobile/home.webp';

import contactsDesktop from './../../assets/tiles/desktop/contacts.webp';
import contactsLaptop from './../../assets/tiles/laptop/contacts.webp';
import contactsTablet from './../../assets/tiles/tablet/contacts.webp';
import contactsMobile from './../../assets/tiles/mobile/contacts.webp';

import testimonialsDesktop from './../../assets/tiles/desktop/testimonials.webp';
import testimonialsLaptop from './../../assets/tiles/laptop/testimonials.webp';
import testimonialsTablet from './../../assets/tiles/tablet/testimonials.webp';
import testimonialsMobile from './../../assets/tiles/mobile/testimonials.webp';

import familyDesktop from './../../assets/tiles/desktop/family.webp';
import familyLaptop from './../../assets/tiles/laptop/family.webp';
import familyTablet from './../../assets/tiles/tablet/family.webp';
import familyMobile from './../../assets/tiles/laptop/family.webp';

interface Tiles {
  path: string;
  title: string;
  background: {
    desktop: string;
    laptop: string;
    tablet: string;
    mobile: string;
  };
  positionChanged?: boolean;
  modifier?: string;
}

export const tilesData: Tiles[] = [
  {
    path: '/about-me',
    title: 'Обо мне',
    background: {
      desktop: aboutMeDesktop,
      laptop: aboutMeLaptop,
      tablet: aboutMeTablet,
      mobile: aboutMeMobile,
    },
    positionChanged: true,
  },
  {
    path: '/home-sessions',
    title: 'Домашние',
    background: {
      desktop: homeDesktop,
      laptop: homeLaptop,
      tablet: homeTablet,
      mobile: homeMobile,
    },
  },
  {
    path: '/love-story',
    title: 'Love Story',
    background: {
      desktop: loveStoryDesktop,
      laptop: loveStoryLaptop,
      tablet: loveStoryTablet,
      mobile: loveStoryMobile,
    },
    modifier: 'item_big',
  },
  {
    path: '/family',
    title: 'Семейные',
    background: {
      desktop: familyDesktop,
      laptop: familyLaptop,
      tablet: familyTablet,
      mobile: familyMobile,
    },
    modifier: 'item_big',
    positionChanged: true,
  },
  {
    path: '/testimonials',
    title: 'Отзывы',
    background: {
      desktop: testimonialsDesktop,
      tablet: testimonialsTablet,
      laptop: testimonialsLaptop,
      mobile: testimonialsMobile,
    },
  },
  {
    path: '/contacts',
    title: 'Контакты',
    background: {
      desktop: contactsDesktop,
      tablet: contactsTablet,
      laptop: contactsLaptop,
      mobile: contactsMobile,
    },
  },
];
