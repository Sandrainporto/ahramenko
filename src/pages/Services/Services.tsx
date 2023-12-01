import Section from '../../shared/Layouts/Section/Section';
import Conditions from '../../widgets/Conditions/Conditions';
import Contacts from '../../widgets/Contacts/Contacts';
import Photosessions from '../../widgets/Photosessions/Photosessions';
import Process from '../../widgets/Process/Process';
import './Services.scss';

const Services = () => {
  return (
    <main className="main">
      <Section classNames="services">
        <div className="content">
          <div className="info">
            <h2>Услуги</h2>
            <div className="description">
              Здесь вы можете получить информацию об условиях фотосессии,
              пакетах услуг и стоимости
            </div>
          </div>
          <Process />
          <Photosessions />
          <Conditions />
          <Contacts />
        </div>
      </Section>
    </main>
  );
};

export default Services;
