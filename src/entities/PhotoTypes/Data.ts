import homeBckground from './../../assets/photo-types/home.webp';
import loveStoryBackground from './../../assets/photo-types/love-story.webp';
import familyBackground from './../../assets/photo-types/contacts.webp';
type Type = {
  path: string;
  title: string;
  description: string;
  background: string;
};

export const photoTypes: Type[] = [
  {
    path: '/home-sessions',
    title: 'Домашняя',
    description:
      'Здесь каждый момент пропитан непринужденностью и свободой. Фотографии позволят сохранить воспоминания о веселых семейных играх, живом смехе детей, нежных моментах между родителями и многочисленных драгоценных мгновениях повседневной жизни.',
    background: homeBckground,
  },
  {
    path: '/love-story',
    title: 'Love Story',
    description:
      ' Вы увидите нежные моменты, улыбки и романтические прогулки, позволяющие почувствовать всю близость и страсть. Каждое фото передает теплоту и интимность, которые есть в отношениях. Фотосессия создает прекрасные воспоминания, которые можно сохранить и поделиться с близкими.',
    background: loveStoryBackground,
  },
  {
    path: '/family',
    title: 'Семейная',
    description:
      'Близость, доверие и поддержка - все это будет видно на каждой фотографии. Фотосессия подарит возможность запечатлеть общие страсти и интересы, создавая историю семьи, которую можно будет вспомнить снова и снова, и которая станет бесценным кладезем семейных сокровищ.',
    background: familyBackground,
  },
];
