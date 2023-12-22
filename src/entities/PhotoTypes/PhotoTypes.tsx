import styles from './PhotoTypes.module.scss';
import { motion } from 'framer-motion';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
import { photoTypes } from './Data';

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
