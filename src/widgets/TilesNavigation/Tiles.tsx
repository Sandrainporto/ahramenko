import { Link } from 'react-router-dom';
import Section from '../../shared/Layouts/Section/Section';
import styles from './Tiles.module.scss';
import { tilesData } from './TilesData';

const Tiles = () => {
  

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
