import styles from './Gallery.module.scss';

import { motion } from 'framer-motion';

const tilesAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

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
