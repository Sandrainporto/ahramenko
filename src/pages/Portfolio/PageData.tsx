import image1 from './../../assets/image-1.webp';
import image2 from './../../assets/image-2.webp';
import image3 from './../../assets/img-1310.webp';
import image4 from './../../assets/img-1310.webp';
import image5 from './../../assets/tiles/about-me.webp';
import image6 from './../../assets/tiles/contacts.webp';
import image7 from './../../assets/tiles/family.webp';
import image8 from './../../assets/tiles/home.webp';
import image9 from './../../assets/tiles/love-story.webp';

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
      title: 'Lorem ipsum dolor sit amet.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam alias tempore. Ipsum, ducimus libero! Deleniti magni voluptatem pariatur at?',
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
      title: 'Lorem ipsum dolor sit, amet consectetur. Quasi, numquam?',
      description:
        'Lorem psum dolor sit, amet consectetur. Quasi, numqpsum dolor sit, amet consectetur. Quasi, numq',
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
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam aliasLorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam alias.',
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
