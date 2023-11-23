import Section from '../../shared/Layouts/Section/Section';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
import styles from './Photographer.module.scss';

const Photographer = () => {
  return (
    <Section classNames="about-photographer">
      <div className={styles.content}>
        <div className={styles.photo}>
          <img
            src="https://www.lieben.no/wp-content/uploads/2018/03/maria4-710x1065.jpg"
            alt="photographer-photo"
          />
        </div>

        <div className={styles.info}>
          <div className={styles.description}>
            <h2 className={styles.name}>Александра Ахраменко</h2>
            <p className={styles.message}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              autem quas ullam voluptates quo quidem quos excepturi culpa,
              doloribus voluptatem enim, in, id numquam vitae ut minima quasi
              suscipit hic! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed ipsa tenetur numquam hic perferendis in modi quasi
              pariatur sapiente vel! Est corporis, ex adipisci mollitia cum
              officiis aperiam debitis quisquam!
            </p>
          </div>

          <MyButtonLink path="/about" text="подробнее" />
        </div>
      </div>
    </Section>
  );
};

export default Photographer;
