import { MSection } from '../../shared/Layouts/Section/Section';
import Conditions from '../../widgets/Conditions/Conditions';
import Contacts from '../../widgets/Contacts/Contacts';
import Photosessions from '../../widgets/Photosessions/Photosessions';
import Process from '../../widgets/Process/Process';
import { motion } from 'framer-motion';
import { textAnimationUpDown } from '../../shared/Animations/animations';
import './Services.scss';

const Services = () => {
  return (
    <>
      <MSection
        classNames="services"
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="info">
          <motion.h2
            custom={0.25}
            variants={textAnimationUpDown}
            className="heading"
          >
            Услуги
          </motion.h2>
          <motion.div
            custom={2.3}
            variants={textAnimationUpDown}
            className="description"
          >
            Здесь вы можете получить информацию об условиях фотосессии, пакетах
            услуг и стоимости
          </motion.div>
        </div>
        <Process />
      </MSection>
      <Photosessions />
      <Conditions />
      <Contacts />
    </>
  );
};

export default Services;
