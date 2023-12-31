import image1 from './../../assets/portfolios/family/image-1.webp';
import image2 from './../../assets/portfolios/family/image-2.webp';
import image3 from './../../assets/portfolios/family/img-1310.webp';
import image4 from './../../assets/portfolios/family/img-1310.webp';
import image5 from './../../assets/portfolios/family/about-me.webp';
import image6 from './../../assets/portfolios/family/contacts.webp';
import image7 from './../../assets/portfolios/family/family.webp';
import image8 from './../../assets/portfolios/family/home.webp';
import image9 from './../../assets/portfolios/family/love-story.webp';

export type infoTypes = {
  page: string;
  data: {
    title: string;
    description: string;
    images?: Array<{ name: string; path: string }>;
  };
};

export const PortfilioPagesInfo: infoTypes[] = [
  {
    page: 'love-story',
    data: {
      title: 'Магия любви в каждом кадре',
      description:
        'Здесь я представляю Вам свои фотографии, которые превращают обычные моменты в незабываемые истории любви. Каждая фотография - это иллюстрация Вашей страсти, нежности и понимания.',
      images: [
        {
          name: 'image1',
          path: image1,
        },
        { name: 'image2', path: image2 },
        {
          name: 'image3',
          path: image3,
        },
        {
          name: 'image8',
          path: image8,
        },
        {
          name: 'image4',
          path: image4,
        },
        { name: 'image5', path: image5 },
        {
          name: 'image6',
          path: image6,
        },
        { name: 'image9', path: image9 },
        {
          name: 'image7',
          path: image7,
        },
      ],
    },
  },
  {
    page: 'family',
    data: {
      title: 'Семейное счастье: взгляд сквозь объектив',
      description:
        'Каждый кадр – это история любви, радости и тепла. В стремлении зафиксировать уникальные моменты Вашей семейной жизни, чтобы они стали бесценными воспоминаниями.',
      images: [
        {
          name: 'image1',
          path: image1,
        },
        { name: 'image2', path: image2 },
        {
          name: 'image3',
          path: image3,
        },
        {
          name: 'image8',
          path: image8,
        },
        {
          name: 'image4',
          path: image4,
        },
        { name: 'image5', path: image5 },
        {
          name: 'image6',
          path: image6,
        },
        { name: 'image9', path: image9 },
        {
          name: 'image7',
          path: image7,
        },
      ],
    },
  },
  {
    page: 'home-sessions',
    data: {
      title: 'Истории, рассказанные домашними снимками',
      description:
        'Здесь Вы найдете искренние фотографии, которые отражают интимные моменты Вашей жизни. Я фиксирую на пленку улыбки, эмоции и неповторимую атмосферу Вашего дома. Доверьтесь мне, чтобы запечатлеть важные моменты Вашей жизни.',
      images: [
        {
          name: 'image1',
          path: image1,
        },
        { name: 'image2', path: image2 },
        {
          name: 'image3',
          path: image3,
        },
        {
          name: 'image8',
          path: image8,
        },
        {
          name: 'image4',
          path: image4,
        },
        { name: 'image5', path: image5 },
        {
          name: 'image6',
          path: image6,
        },
        { name: 'image9', path: image9 },
        {
          name: 'image7',
          path: image7,
        },
      ],
    },
  },
];
