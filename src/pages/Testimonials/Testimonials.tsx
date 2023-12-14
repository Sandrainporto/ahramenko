import Testimonial from '../../entities/Testimonial/Testimonial';
import Section from '../../shared/Layouts/Section/Section';
const TestimonialsPage = () => {
  return (
    <>
      <Section classNames="testimonials">
        <h2 className="heading">Отзывы</h2>
        <p className="description">
          Здесь Вы можете ознакомится с отзывами о моей работе
        </p>
      </Section>
      <Testimonial />
    </>
  );
};

export default TestimonialsPage;
