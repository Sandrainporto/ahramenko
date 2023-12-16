import { MSection } from '../../shared/Layouts/Section/Section';
import { MButtonLink } from '../../shared/ui/Button-Link/ButtonLink';
import styles from './Erros.module.scss';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';
const imageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: custom * 0.7, delay: custom * 0.3 },
  }),
};
const Error = () => {
  return (
    <MSection
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.2, once: true }}
      classNames="error-page"
    >
      <motion.div
        custom={1}
        variants={textAnimationUpDown}
        className={`${styles.heading + ' ' + 'heading'}`}
      >
        Простите, такой страницы не существует...
      </motion.div>
      <MButtonLink
        custom={3}
        variants={imageAnimation}
        path="/"
        text="Вернуться на главную"
      />
    </MSection>
  );
};

export default Error;
