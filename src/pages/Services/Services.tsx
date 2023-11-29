import Section from '../../shared/Layouts/Section/Section';
import Photosessions from '../../widgets/Photosessions/Photosessions';
import Process from '../../widgets/Process/Process';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <main className="main">
      <Section classNames="services">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2>Услуги</h2>
            <div className={styles.description}>
              Здесь вы можете получить информацию о пакетах услуг и стоимости
            </div>
          </div>
          <Process />
          <Photosessions />
        </div>
      </Section>
    </main>
  );
};

export default Services;
