import chat from './../../assets/icons/chat.webp';
import camera from './../../assets/icons/camera.webp';
import retouch from './../../assets/icons/retouch.webp';
import photos from './../../assets/icons/photos.webp';

import styles from './ServiceCards.module.scss';

type ServiceTypes = {
  heading: string;
  icon: string;
  description: string;
};

const ServiceCards = () => {
  const services: ServiceTypes[] = [
    {
      heading: 'Консультация',
      icon: chat,
      description:
        'Помогу вам подобрать подходящий пакет услуг и образ; подготовлю к фотосессии',
    },
    {
      heading: 'Фотосъемка',
      icon: camera,
      description:
        'Создам комфортные условия и расслабляющую атмосферу, помогу с позированием. Я полностью руковожу процессом, просто доверьтесь мне',
    },
    {
      heading: 'Ретушь',
      icon: retouch,
      description:
        'Отправлю вам все фотографии для отбора снимков на коррекцию. Или положитесь на мой вкус',
    },
    {
      heading: 'Отдача материала',
      icon: photos,
      description:
        'Помогу вам подобрать подходящий пакет услуг и образ; подготовлю к фотосессии',
    },
  ];

  return (
    <div className={styles.steps}>
      {services.map((service) => (
        <div key={service.heading} className={styles.item}>
          <img className={styles.icon} src={service.icon} />

          <p className={styles.heading}>
            <strong>{service.heading}</strong>
          </p>
          <div className={styles.description}>{service.description} </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
