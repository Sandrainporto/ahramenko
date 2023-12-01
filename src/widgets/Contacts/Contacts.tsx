import styles from './Contacts.module.scss';
import Icons from '../../entities/SocialIcons/Icons';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h4 className="title">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </h4>
      <div className={styles.socials}>
        <Icons textType={true} />
      </div>
    </div>
  );
};

export default Contacts;
