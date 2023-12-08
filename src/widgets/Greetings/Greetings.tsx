import Section from '../../shared/Layouts/Section/Section';
import styles from './Greetings.module.scss';
import background from './../../assets/image-2.webp';

const Greetings = () => {
  return (
    <Section classNames="greeting">
      <div className={styles.content}>
        <img src={background} alt="background" />
        <div className={styles.info}>
          <p className={styles.position}>Фотограф</p>
          <h2 className={styles.heading}>Александра Ахраменко</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam vero quia deleniti reiciendis cumque, ducimus maiores harum
            facere incidunt ad earum odit mollitia sit quibusdam eius nemo quod!
            Ipsum.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Greetings;
