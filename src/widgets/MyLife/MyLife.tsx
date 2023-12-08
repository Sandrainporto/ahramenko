import MyLifeGallery from '../../entities/MyLifeGallery/MyLifeGallery';
import Section from '../../shared/Layouts/Section/Section';
import MyButtonLink from '../../shared/ui/Button-Link/ButtonLink';
import styles from './MyLife.module.scss';

const MyLife = () => {
  return (
    <Section classNames="my-life">
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className="heading">Обо мне</h2>
          <p className={`${styles.description} + ' ' + description`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            explicabo ullam officiis eligendi recusandae. Architecto accusamus,
            dolor recusandae explicabo minima ipsum cumque eos atque voluptatem
            necessitatibus obcaecati natus iste temporibus!
          </p>
          <MyButtonLink path="/contacts" text="Связаться со мной" />
        </div>
        <MyLifeGallery />
      </div>
    </Section>
  );
};

export default MyLife;
