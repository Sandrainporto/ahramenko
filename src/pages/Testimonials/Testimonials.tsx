import Testimonial from '../../entities/Testimonial/Testimonial';
import { MSection } from '../../shared/Layouts/Section/Section';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';

const TestimonialsPage = () => {
  return (
    <>
      <MSection
        classNames="testimonials"
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h2
          custom={1}
          variants={textAnimationUpDown}
          className="heading"
        >
          Отзывы
        </motion.h2>
        <motion.p
          custom={2}
          variants={textAnimationUpDown}
          className="description"
        >
          Здесь Вы можете ознакомится с отзывами о моей работе
        </motion.p>
      </MSection>
      <Testimonial />
    </>
  );
};

export default TestimonialsPage;
