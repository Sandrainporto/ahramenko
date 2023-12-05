import styles from './Contacts.module.scss';
import Icons from '../../entities/SocialIcons/Icons';
import Section from '../../shared/Layouts/Section/Section';

const Contacts = () => {
  return (
    <Section classNames="contacts">
      <div className={styles.contacts}>
        <h4 className="title">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h4>
        <div className={styles.socials}>
          <Icons textType={true} />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
