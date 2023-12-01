import styles from './PhotoTypes.module.scss';
import image from './../../assets/tiles/colored.jpg';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';

type Type = {
  path: string;
  title: string;
  description: string;
  background: string;
};

export const photoTypes: Type[] = [
  {
    path: '/home-sessions',
    title: 'Домашняя',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem praesentium, iste doloribus eligendi veritatis quos consequuntur earum libero, sapiente adipisci! Quas neque accusantium ad voluptatum id harum vero nemo.',
    background: image,
  },
  {
    path: '/love-story',
    title: 'Love Story',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem praesentium, iste doloribus eligendi veritatis quos consequuntur earum libero, sapiente adipisci! Quas neque accusantium ad voluptatum id harum vero nemo.',
    background: image,
  },
  {
    path: '/family',
    title: 'Семейная',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias exercitationem praesentium, iste doloribus eligendi veritatis quos consequuntur earum libero, sapiente adipisci! Quas neque accusantium ad voluptatum id harum vero nemo.',
    background: image,
  },
];

const PhotoTypes = () => {
  return (
    <>
      {photoTypes.map((type) => (
        <div key={type.title} className={styles.item}>
          <div className={styles.image}>
            <img src={type.background} alt={type.title} />
          </div>
          <div className="info">
            <h3 className={styles.title}>{type.title}</h3>
            <p className={styles.description}>{type.description}</p>
            <p className={styles.price}>
              <strong>Стоимость:</strong> <span>120 руб.</span>
            </p>
          </div>

          <MyButtonLink path={type.path} text="Примеры работ" />
        </div>
      ))}
    </>
  );
};

export default PhotoTypes;
