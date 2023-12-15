import { Link } from 'react-router-dom';
import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './Tiles.module.scss';
import { tilesData } from './TilesData';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 0.3 },
  }),
};
const tilesAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Tiles = () => {
  return (
    <MSection
      classNames="site-map"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h2 custom={1} variants={textAnimation} className="heading">
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
