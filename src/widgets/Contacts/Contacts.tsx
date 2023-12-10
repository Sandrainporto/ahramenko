import styles from './Contacts.module.scss';
import Icons from '../../entities/SocialIcons/Icons';
import Section from '../../shared/Layouts/Section/Section';

const Contacts = () => {
  return (
    <Section classNames="contacts">
      <div className={styles.contacts}>
        <h3 className="title">
          Для записи свяжитесь со мной удобным для Вас способом!
        </h3>
        <div className={styles.socials}>
          <Icons textType={true} />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
