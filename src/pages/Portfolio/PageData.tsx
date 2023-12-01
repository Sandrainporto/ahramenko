import image from './../../assets/tiles/colored.jpg';
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
          name: 'Moscow',
          path: 'https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=',
        },
        { name: 'Rabit', path: image },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
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
          name: 'Moscow',
          path: 'https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=',
        },
        { name: 'Rabit', path: image },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
        {
          name: 'Moscow',
          path: 'https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=',
        },
        { name: 'Rabit', path: image },
        { name: 'Rabit', path: image },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
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
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
        {
          name: 'Moscow',
          path: 'https://media.istockphoto.com/id/1062947134/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%BE%D1%80-%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F-%D0%B1%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5-%D0%BB%D1%83%D1%87%D0%B8-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=rSRPoCl78qvsYxaRhOa0xS_z10jDDnJvhteWLM5w8yo=',
        },
        { name: 'Rabit', path: image },
        { name: 'Rabit', path: image },
        { name: 'Rabit', path: image },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
        { name: 'Rabit', path: image },
        { name: 'Rabit', path: image },

        {
          name: 'Girl',
          path: 'https://i.pinimg.com/736x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg',
        },
      ],
    },
  },
];
