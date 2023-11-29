import ServiceCards from '../../entities/ServiceCard/ServiceCards';
import Section from '../../shared/Layouts/Section/Section';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <main className="main">
      <Section classNames="services">
        <div className={styles.info}>
          <h2>Услуги</h2>
          <div className={styles.description}>
            Здесь вы можете получить информацию о пакетах услуг и стоимости
          </div>
        </div>
        <div className={styles.process}>
          <h3>Как проходит процесс фотосъемки</h3>
          <ServiceCards />
        </div>
      </Section>
    </main>
  );
};

export default Services;
