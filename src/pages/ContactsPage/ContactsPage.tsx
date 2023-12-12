import Section from '../../shared/Layouts/Section/Section';
import styles from './ContactsPage.module.scss';
import background from './../../assets/slider/slide-3.webp';
import Contacts from '../../widgets/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <main className={`${styles.main + ' ' + 'main'}`}>
      <Section classNames="thank-you">
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={background} alt="page-background" />
          </div>
          <div className={styles.info}>
            <h2 className="heading">
              Благодарю, что проявляете интерес к моему творчеству!
            </h2>
            <p className={styles.message}>
              Если у Вас возникли вопросы, появилась идея для фотосессии или
              просто хочется обсудить что-то интересное, буду рада пообщаться с
              Вами. Не стесняйтесь звонить или начать общение в одной из
              соцсетей. Я всегда открыта для общения и готова к совместной
              работе!
            </p>
          </div>
        </div>
      </Section>
      <Contacts />
    </main>
  );
};

export default ContactsPage;
