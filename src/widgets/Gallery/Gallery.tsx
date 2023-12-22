import styles from './Gallery.module.scss';
import { motion } from 'framer-motion';
import { tilesAnimation } from '../../shared/Animations/animations';

const Gallery = ({
  images,
}: {
  images?: Array<{ name: string; path: string }>;
}) => {
  return (
    <div className={styles.gallery}>
      {images?.map((image, index) => (
        <motion.div
          key={image.name}
          className={styles.item}
          custom={index + 2 * 1}
          variants={tilesAnimation}
        >
          <img src={image.path} alt={image.name} />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
