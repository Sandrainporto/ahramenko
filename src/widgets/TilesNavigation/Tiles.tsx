import { Link } from 'react-router-dom';
import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './Tiles.module.scss';
import { tilesData } from './TilesData';
import { motion } from 'framer-motion';
import {
  textAnimationUpDown,
  tilesAnimation,
} from '../../shared/Animations/animations';

const Tiles = () => {
  return (
    <MSection
      classNames="site-map"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.25, once: true }}
    >
      <motion.h2 custom={1} variants={textAnimationUpDown} className="heading">
        ваши трогательные эмоции в моменте
      </motion.h2>
      <div className={styles.tiles}>
        {tilesData.map((tile, index) => (
          <Link
            key={tile.title}
            to={tile.path}
            className={`${styles.item} ${
              tile.modifier ? styles[tile.modifier] : ''
            }`}
          >
            <motion.div
              custom={index + 2}
              variants={tilesAnimation}
              className={styles.image}
            >
              <img
                src={tile.background}
                alt={tile.title}
                className={tile.positionChanged ? styles.moved : ''}
              />
            </motion.div>
            <h3 className={styles.image_title}>{tile.title}</h3>
          </Link>
        ))}
      </div>
    </MSection>
  );
};

export default Tiles;
