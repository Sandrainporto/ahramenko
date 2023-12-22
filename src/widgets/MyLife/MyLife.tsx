import MyLifeGallery from '../../entities/MyLifeGallery/MyLifeGallery';
import { MButtonLink } from '../../shared/ui/Button-Link/ButtonLink';
import styles from './MyLife.module.scss';
import { motion } from 'framer-motion';
import { MSection } from '../../shared/Layouts/Section/Section';
import {
  textAnimationUpDown,
  imageAnimation,
} from '../../shared/Animations/animations';

const MyLife = () => {
  return (
    <MSection
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      classNames="my-life"
    >
      <div className={styles.content}>
        <div className={styles.info}>
          <motion.h2
            custom={1}
            variants={textAnimationUpDown}
            className="heading"
          >
            Обо мне
          </motion.h2>
          <motion.p
            custom={2}
            variants={textAnimationUpDown}
            className={`${styles.description} + ' ' + description`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam r
            recusandae explicabo minima ipsum cumque eos atque voluptatem
            necessitatibus obcaecati natus iste temporibus! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Veniam r recusandae explicabo
            minima ipsum cumque eos atque voluptatem necessitatibus obcaecati
            natus iste temporibus! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Veniam r recusandae explicabo minima ipsum cumque
            eos atque voluptatem necessitatibus obcaecati natus iste temporibus!
          </motion.p>
          <MButtonLink
            custom={3}
            variants={imageAnimation}
            path="/contacts"
            text="Связаться со мной"
          />
        </div>
        <MyLifeGallery />
      </div>
    </MSection>
  );
};

export default MyLife;
