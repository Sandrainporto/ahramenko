import styles from './PhotoTypes.module.scss';
import homeBckground from './../../assets/photo-types/home.webp';
import loveStoryBackground from './../../assets/photo-types/love-story.webp';
import familyBackground from './../../assets/photo-types/contacts.webp';
import { motion } from 'framer-motion';

import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
const imageAnimationWithMove = {
  hidden: {
    y: -100,

    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: custom * 1, delay: custom * 0.3 },
  }),
};
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

const PhotoTypes = () => {
  return (
    <>
      {photoTypes.map((type, index) => (
        <motion.div
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ amount: 0.2, once: true }}
          custom={index * 1}
          variants={imageAnimationWithMove}
          key={type.title}
          className={styles.item}
        >
          <div className={styles.image}>
            <img src={type.background} alt={type.title} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{type.title}</h3>
            <p className={styles.description}>{type.description}</p>
          </div>
          <p className={styles.price}>
            <strong>Стоимость:</strong> <span>120 руб.</span>
          </p>

          <MyButtonLink path={type.path} text="Примеры работ" />
        </motion.div>
      ))}
    </>
  );
};

export default PhotoTypes;
