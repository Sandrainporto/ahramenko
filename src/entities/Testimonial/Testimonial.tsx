import styles from './Testimonial.module.scss';
import { testimonials } from './Data';
import { MSection } from '../../shared/Layouts/Section/Section';
import { motion } from 'framer-motion';
import { tilesAnimation } from '../../shared/Animations/animations';

const Testimonial = () => {
  return (
    <MSection
      classNames="testimonials"
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ amount: 0.1, once: true }}
    >
      <div className={styles.content}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            className={styles.testimonial}
            custom={index + 2 * 1}
            variants={tilesAnimation}
          >
            <div className={styles.image}>
              <img src={testimonial.photo} alt="testimonial-image" />
            </div>
            <div className={styles.message}>
              <div className={styles.author}>{testimonial.author}</div>
              <p className={styles.text}>{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </MSection>
  );
};

export default Testimonial;
