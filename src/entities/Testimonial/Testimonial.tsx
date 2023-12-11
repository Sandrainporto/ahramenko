import styles from './Testimonial.module.scss';
import { testimonials } from './Data';
import Section from '../../shared/Layouts/Section/Section';

const Testimonial = () => {
  return (
    <Section classNames="testimonials">
      <div className={styles.content}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className={styles.testimonial}>
            <div className={styles.image}>
              <img src={testimonial.photo} alt="testimonial-image" />
            </div>
            <div className={styles.message}>
              <div className={styles.author}>{testimonial.author}</div>
              <p className={styles.text}>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonial;
