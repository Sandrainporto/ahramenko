import { Link } from 'react-router-dom';
import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './Tiles.module.scss';
import { tilesData } from './TilesData';
import { motion } from 'framer-motion';
import {
  textAnimationUpDown,
  tilesAnimation,
} from '../../shared/Animations/animations';
import { useMediaQuery } from 'react-responsive';

const Tiles = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1281px)',
  });
  const isSmallLaptop = useMediaQuery({
    query: '(min-device-width: 768px) and (max-width: 1280px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-device-width: 414px) and (max-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 414px)',
  });

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
        {tilesData.map((tile, index) => {
          let background;
          if (isDesktop) {
            background = tile.background.desktop;
          } else if (isSmallLaptop) {
            background = tile.background.laptop;
          } else if (isTablet) {
            background = tile.background.tablet;
          } else if (isMobile) {
            background = tile.background.mobile;
          }

          return (
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
                  src={background}
                  alt={tile.title}
                  className={tile.positionChanged ? styles.moved : ''}
                />
              </motion.div>
              <h3 className={styles.image_title}>{tile.title}</h3>
            </Link>
          );
        })}
      </div>
    </MSection>
  );
};

export default Tiles;
