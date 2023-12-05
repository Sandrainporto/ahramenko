import { Link } from 'react-router-dom';
import Section from '../../shared/Layouts/Section/Section';
import styles from './Tiles.module.scss';
import { tilesData } from './TilesData';

const Tiles = () => {
  return (
    <Section classNames="site-map">
      <h2 className="heading">ваши трогательные эмоции в моменте</h2>

      <div className={styles.tiles}>
        {tilesData.map((tile) => (
          <Link
            key={tile.title}
            to={tile.path}
            className={`${styles.item} ${
              tile.modifier ? styles[tile.modifier] : ''
            }`}
          >
            <div className={styles.image}>
              <img
                src={tile.background}
                alt={tile.title}
                className={tile.positionChanged ? styles.moved : ''}
              />
            </div>
            <h3 className={styles.image_title}>{tile.title}</h3>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Tiles;
