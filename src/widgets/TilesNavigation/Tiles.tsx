import { Link } from 'react-router-dom';
import Section from '../../shared/Layouts/Section/Section';
import styles from './Tiles.module.scss';

interface Tiles {
  path: string;
  title: string;
  background: string;
  modifier?: string;
}
const Tiles = () => {
  const tilesData: Tiles[] = [
    { path: '/about-me', title: 'Обо мне', background: '/tiles/colored.jpg' },
    { path: '/', title: 'Домашние', background: '/tiles/colored.jpg' },
    {
      path: '/portfolio',
      title: 'Love Story',
      background: '/tiles/colored.jpg',
      modifier: 'item_big',
    },
    {
      path: '/services',
      title: 'Семейные',
      background: '/tiles/black-white.jpg',
      modifier: 'item_big',
    },
    {
      path: '/testimonials',
      title: 'Отзывы',
      background: '/tiles/colored.jpg',
    },
    {
      path: '/contacts',
      title: 'Контакты',
      background: '/tiles/black-white.jpg',
    },
  ];

  return (
    <Section classNames="site-map">
      <h2 className={styles.title}>ваши трогательные эмоции в моменте</h2>

      <div className={styles.container}>
        {tilesData.map((tile) => (
          <Link
            key={tile.title}
            to={tile.path}
            className={`${styles.item} ${
              tile.modifier ? styles[tile.modifier] : ''
            }`}
          >
            <div className={styles.image}>
              <img src={tile.background} alt={tile.title} />
            </div>
            <h3 className={styles.image_title}>{tile.title}</h3>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Tiles;
