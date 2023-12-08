import Section from '../../shared/Layouts/Section/Section';
import styles from './Messages.module.scss';
const Messages = () => {
  return (
    <Section classNames="messages">
      <div className={styles.content}>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic
          quibusdam, molestiae rerum corporis deserunt aliquam quasi in ab
          maiores neque dignissimos commodi delectus, officiis corrupti. Ullam,
          illum! Tempore, suscipit vel maxime ab minus reiciendis necessitatibus
          fuga mollitia molestiae ex? Eligendi tempora mollitia dolorum sint.
        </p>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          minima atque fugiat voluptates! Fugit placeat rerum doloribus harum
          accusamus eum itaque neque tempora sequi nulla sapiente recusandae
          assumenda temporibus ipsam, accusantium ipsa ex magni aperiam nam
          porro alias.
        </p>
      </div>
    </Section>
  );
};

export default Messages;
