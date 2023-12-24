import { MSection } from '../../shared/Layouts/Section/Section';
import styles from './Messages.module.scss';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';

const Messages = () => {
  return (
    <MSection
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.4, once: true }}
      classNames="messages"
    >
      <div className={styles.content}>
        <motion.p
          custom={1}
          variants={textAnimationUpDown}
          className={styles.paragraph}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic
          quibusdam, molestiae rerum corporis deserunt aliquam quasi in ab
          maiores neque dignissimos commodi delectus, officiis corrupti. Ullam,
          illum! Tempore, suscipit vel maxime ab minus reiciendis necessitatibus
          fuga mollitia molestiae ex? Eligendi tempora mollitia dolorum sint.
        </motion.p>
        <motion.p
          custom={3}
          variants={textAnimationUpDown}
          className={styles.paragraph}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          minima atque fugiat voluptates! Fugit placeat rerum doloribus harum
          accusamus eum itaque neque tempora sequi nulla sapiente recusandae
          assumenda temporibus ipsam, accusantium ipsa ex magni aperiam nam
          porro alias.
        </motion.p>
      </div>
    </MSection>
  );
};

export default Messages;
